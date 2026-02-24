interface SearchInputProps {
  value: string;
  onSearch: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  placeholder: string;
}

const SearchInput = ({ value, onSearch, placeholder }: SearchInputProps) => {
  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onSearch}
    />
  );
};

export default SearchInput;
