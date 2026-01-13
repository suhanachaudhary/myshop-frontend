import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import toast from 'react-hot-toast';
import Button from './Button';
import Badge from './Badge';
import StockBadge from './StockBadge';
import PriceDisplay from './PriceDisplay';

const ProductCard = ({ product, index = 0, showAnimation = false }) => {
  const dispatch = useDispatch();

  const discount = product.discount || 0;

  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addToCart({ product, quantity: 1 })).unwrap();
      toast.success('Added to cart! 🛒');
    } catch (error) {
      toast.error('Failed to add to cart');
    }
  };

  return (
    <div
      className={`group bg-white rounded-2xl border-2 border-gray-200 shadow-sm overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300 ${
        showAnimation ? 'animate-slideInUp' : ''
      }`}
      style={showAnimation ? { animationDelay: `${index * 100}ms` } : {}}
    >
      <Link to={`/product/${product._id}`} className="block">
        <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white">
          {discount > 0 && (
            <Badge variant="discount" className="absolute top-4 left-4 z-10">
              {discount}% OFF
            </Badge>
          )}

          <img
            src={product.image}
            alt={product.name}
            className="mx-auto h-44 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="px-6 pb-6">
        <h3 className="font-bold mt-2 text-[#0F172A] mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <div className="flex text-yellow-400 text-lg mb-3">★★★★★</div>

        <PriceDisplay price={product.price} discount={discount} size="md" />

        <Button
          variant="primary"
          size="md"
          className="w-full mb-4"
          onClick={handleAddToCart}
        >
          🛒 Add to Cart
        </Button>

        <div className="flex items-center justify-between text-xs text-[#64748B]">
          <StockBadge stock={product.stock} showCount={true} />
          <span className="flex items-center gap-1 text-blue-600">
            <span>🚚</span> Free Shipping
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
