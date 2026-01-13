
import axios from "axios";

const API = axios.create({
    baseURL: "https://myshop-backend-cdz8.onrender.com/api",
});

API.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return req;
});

export const getAdminProducts = () => API.get("/admin/products");
export const deleteProduct = (id) => API.delete(`/admin/products/${id}`);
export const updateDiscount = (id, discount) =>
    API.put(`/admin/products/${id}/discount`, { discount });

export const updateProduct = (id, formData) =>
    API.put(`/admin/products/${id}`, formData);

export const getAllUsers = () => API.get("/admin/users");
export const deleteUser = (id) => API.delete(`/admin/users/${id}`);


