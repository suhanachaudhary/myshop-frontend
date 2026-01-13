const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    discount: 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg',
    new: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md',
  };

  return (
    <span
      className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
