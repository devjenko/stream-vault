interface SearchResultsProps {
  results: number
}

const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <p className="num-results">
      Found <strong>{results}</strong> results
    </p>
  )
}

export default SearchResults
