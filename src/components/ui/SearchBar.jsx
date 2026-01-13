import { Search } from 'lucide-react';

const SearchBar = ({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
}) => {
  return (
    <div className={`relative group ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border-2 border-gray-200 rounded-xl pl-10 px-4 py-2.5 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all duration-300 bg-gray-50/50 focus:bg-white"
      />
      <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
    </div>
  );
};

export default SearchBar;
