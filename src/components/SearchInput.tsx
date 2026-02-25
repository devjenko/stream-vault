import { useState, useEffect } from "react";
import { searchMovies } from "../utils/searchMovies";
import type { movie } from "../types/movie";

interface SearchInputProps {
  placeholder: string;
  setMovies: React.Dispatch<React.SetStateAction<movie[]>>;
}

const SearchInput = ({ placeholder, setMovies }: SearchInputProps) => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (!query) return;

    const timeout = setTimeout(async () => {
      try {
        const res = await searchMovies(query);
        setMovies(res.description ?? []);
      } catch (error) {
        console.log("Failed to fetch movies", error);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchInput;
