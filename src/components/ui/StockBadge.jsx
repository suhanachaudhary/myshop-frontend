const StockBadge = ({ stock, showCount = true, className = '' }) => {
  const inStock = stock > 0;

  return (
    <span
      className={`flex items-center gap-1.5 font-medium text-xs ${className}`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          inStock ? 'bg-green-500 animate-pulse' : 'bg-red-500'
        }`}
      ></span>
      {inStock
        ? showCount
          ? `${stock} In Stock`
          : 'In Stock'
        : 'Out of Stock'}
    </span>
  );
};

export default StockBadge;
