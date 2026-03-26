import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import type { Movie } from '../types/movie'
import type { StateSetter } from '../types/state'

interface NavbarProps {
  movies: Movie[]
  setMovies: StateSetter<Movie[]>
}

const Navbar = ({ movies, setMovies }: NavbarProps) => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">
          <a href="/">
            <img
              className="rounded-sm"
              src="/icon/stream-vault-icon.png"
              alt="Stream Vault icon"
              width={32}
              height={32}
            />
          </a>
        </span>
        <h1>Stream Vault</h1>
      </div>
      <SearchInput placeholder="Search movies..." setMovies={setMovies} />
      <SearchResults results={movies.length} />
    </nav>
  )
}

export default Navbar
