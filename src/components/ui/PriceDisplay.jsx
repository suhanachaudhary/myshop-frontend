import Badge from './Badge';

const PriceDisplay = ({ price, discount = 0, size = 'md', showSavings = true }) => {
  const hasDiscount = discount > 0;
  const oldPrice = hasDiscount
    ? Math.round(price / (1 - discount / 100))
    : price;
  const savings = oldPrice - price;

  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className={`${sizes[size]} font-bold text-blue-600`}>
        ${price.toFixed(2)}
      </span>
      {hasDiscount && (
        <>
          <span className="text-sm line-through text-gray-400">
            ${oldPrice.toFixed(2)}
          </span>
          {showSavings && (
            <Badge variant="success" className="text-xs">
              Save ${savings.toFixed(2)}
            </Badge>
          )}
        </>
      )}
    </div>
  );
};

export default PriceDisplay;
