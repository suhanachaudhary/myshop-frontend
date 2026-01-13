import { Plus, Minus } from 'lucide-react';

const QuantityControl = ({
  quantity,
  onIncrease,
  onDecrease,
  size = 'md',
  className = '',
}) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-sm min-w-[24px]',
    md: 'text-lg min-w-[32px]',
    lg: 'text-xl min-w-[40px]',
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className={`flex items-center gap-2 bg-gray-100 rounded-xl p-1 ${className}`}>
      <button
        onClick={onDecrease}
        className={`${sizes[size]} bg-white border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-sm`}
        aria-label="Decrease quantity"
      >
        <Minus className={iconSizes[size]} />
      </button>

      <span className={`font-bold text-gray-800 text-center ${textSizes[size]}`}>
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className={`${sizes[size]} bg-white border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-sm`}
        aria-label="Increase quantity"
      >
        <Plus className={iconSizes[size]} />
      </button>
    </div>
  );
};

export default QuantityControl;
