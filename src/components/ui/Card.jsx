const Card = ({
  children,
  className = '',
  padding = 'default',
  hover = false,
}) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-200 ${
        paddings[padding]
      } ${hover ? 'hover:shadow-lg transition-shadow duration-300' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
