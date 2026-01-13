import { forwardRef } from 'react';

const Input = forwardRef(
  (
    {
      label,
      icon,
      error,
      helperText,
      className = '',
      containerClassName = '',
      ...props
    },
    ref
  ) => {
    return (
      <div className={containerClassName}>
        {label && (
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {icon && <span className="inline-block mr-1">{icon}</span>}
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={`w-full border-2 rounded-xl px-4 py-3 focus:ring-2 outline-none transition-all ${
              error
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
            } ${className}`}
            {...props}
          />
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
