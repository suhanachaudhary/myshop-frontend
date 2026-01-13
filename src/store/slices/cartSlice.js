import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://myshop-backend-cdz8.onrender.com/api';

// Helper to get token
const getToken = () => localStorage.getItem('token');

// Helper to get auth headers
const getAuthHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
});

// Async thunks
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (!token) {
        // Load from local storage
        const localCart = JSON.parse(localStorage.getItem('cart')) || [];
        return localCart;
      }
      
      const response = await axios.get(`${API_URL}/cart`, {
        headers: getAuthHeaders(),
      });
      return response.data.cart;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch cart');
    }
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ product, quantity = 1 }, { getState, rejectWithValue }) => {
    try {
      const token = getToken();
      const cartItem = {
        data: product,
        product: product._id,
        quantity,
      };

      if (!token) {
        // Handle local cart
        let localCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existing = localCart.find((item) => item.product === product._id);

        if (existing) {
          existing.quantity += quantity;
        } else {
          localCart.push(cartItem);
        }

        localStorage.setItem('cart', JSON.stringify(localCart));
        return localCart;
      }

      // Handle server cart
      await axios.post(`${API_URL}/cart/add`, cartItem, {
        headers: getAuthHeaders(),
      });

      const response = await axios.get(`${API_URL}/cart`, {
        headers: getAuthHeaders(),
      });
      return response.data.cart;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to add to cart');
    }
  }
);

export const updateCartQuantity = createAsyncThunk(
  'cart/updateQuantity',
  async ({ productId, delta }, { rejectWithValue }) => {
    try {
      const token = getToken();

      if (!token) {
        // Handle local cart
        let localCart = JSON.parse(localStorage.getItem('cart')) || [];
        const item = localCart.find((i) => i.product === productId);

        if (!item) return localCart;

        item.quantity += delta;

        if (item.quantity <= 0) {
          localCart = localCart.filter((i) => i.product !== productId);
        }

        localStorage.setItem('cart', JSON.stringify(localCart));
        return localCart;
      }

      // Handle server cart
      await axios.put(
        `${API_URL}/cart/update`,
        { productId, delta },
        { headers: getAuthHeaders() }
      );

      const response = await axios.get(`${API_URL}/cart`, {
        headers: getAuthHeaders(),
      });
      return response.data.cart;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to update quantity');
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (productId, { rejectWithValue }) => {
    try {
      const token = getToken();

      if (!token) {
        // Handle local cart
        let localCart = JSON.parse(localStorage.getItem('cart')) || [];
        localCart = localCart.filter((i) => i.product !== productId);
        localStorage.setItem('cart', JSON.stringify(localCart));
        return localCart;
      }

      // Handle server cart
      await axios.delete(`${API_URL}/cart/remove/${productId}`, {
        headers: getAuthHeaders(),
      });

      const response = await axios.get(`${API_URL}/cart`, {
        headers: getAuthHeaders(),
      });
      return response.data.cart;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to remove item');
    }
  }
);

export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem('cart');
      return [];
    } catch (error) {
      return rejectWithValue('Failed to clear cart');
    }
  }
);

// Cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isOpen: false,
    loading: false,
    error: null,
  },
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch cart
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add to cart
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update quantity
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      // Remove from cart
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      // Clear cart
      .addCase(clearCart.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartIsOpen = (state) => state.cart.isOpen;
export const selectCartLoading = (state) => state.cart.loading;
export const selectCartError = (state) => state.cart.error;

export const selectCartTotal = (state) => {
  return state.cart.items.reduce((sum, item) => {
    // Handle both local storage and server cart structures
    const isProductObject = typeof item?.product === 'object' && item?.product !== null;
    const productData = isProductObject ? item.product : item?.data;
    const price = productData?.price || 0;
    return sum + price * (item.quantity || 0);
  }, 0);
};

export const selectCartItemsCount = (state) => {
  return state.cart.items.reduce((count, item) => count + item.quantity, 0);
};

export const selectCartItemCount = (state) => state.cart.items.length;

export const { toggleCart, openCart, closeCart } = cartSlice.actions;

export default cartSlice.reducer;
