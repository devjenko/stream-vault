import { useState, useEffect } from 'react'
import { searchMovies } from '../utils/searchMovies'
import type { Movie } from '../types/movie'
import type { StateSetter } from '../types/state'

interface SearchInputProps {
  placeholder: string
  setMovies: StateSetter<Movie[]>
}

const SearchInput = ({ placeholder, setMovies }: SearchInputProps) => {
  const [query, setQuery] = useState<string>('')

  useEffect(() => {
    if (!query) {
      setMovies([])
      return
    }

    const timeout = setTimeout(async () => {
      try {
        const results = await searchMovies(query)
        setMovies(results)
      } catch (error) {
        console.log('Failed to fetch movies', error)
      }
    }, 500)
    return () => clearTimeout(timeout)
  }, [query])

  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}

export default SearchInput
