import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import type { movie } from '../types/movie'

interface NavbarProps {
  movies: movie[]
  setMovies: React.Dispatch<React.SetStateAction<movie[]>>
}

const Navbar = ({ movies, setMovies }: NavbarProps) => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">
          <a href="/">
            {' '}
            <img
              src="/icon/stream-vault-icon.png"
              alt="Stream Vault icon"
              width={50}
              height={50}
            />
          </a>
        </span>
        <h1>Stream Vault</h1>
      </div>
      <SearchInput placeholder="Search for movies..." setMovies={setMovies} />
      <SearchResults results={movies.length} />
    </nav>
  )
}

export default Navbar
