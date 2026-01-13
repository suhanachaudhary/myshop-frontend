import Button from './Button';

const EmptyState = ({
  icon = '📦',
  title = 'No items found',
  description = 'Try adjusting your filters or search',
  actionLabel,
  onAction,
  className = '',
}) => {
  const isReactComponent = typeof icon === 'object';

  return (
    <div className={`flex flex-col items-center justify-center py-20 text-center ${className}`}>
      <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
        {isReactComponent ? icon : <span className="text-6xl">{icon}</span>}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-8 max-w-md">{description}</p>
      {actionLabel && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
