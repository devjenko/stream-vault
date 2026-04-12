import { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Toast from './components/Toast'
import type { Movie } from './types/movie'
import Main from './components/Main'
import SearchInput from './components/SearchInput'
import SearchResults from './components/SearchResults'
import MovieCard from './components/MovieCard'
import Box from './components/Box'
import MovieCardInfo from './components/MovieCardInfo'
import SummaryCard from './components/SummaryCard'
import Rating from './components/Rating'
import AddToListButton from './components/AddToListButton'
import MovieDetails from './components/MovieDetails'

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [openMovieList, setOpenMovieList] = useState(true)
  const [openDetails, setOpenDetails] = useState(true)
  const [selectedMovieCard, setSelectedMovieCard] = useState<Movie | null>(null)
  const [watched, setWatched] = useState<Movie[]>(() => {
    if (typeof localStorage === 'undefined') return []

    const stored = localStorage.getItem('watched')
    if (!stored) return []

    try {
      return JSON.parse(stored) as Movie[]
    } catch {
      return []
    }
  })
  const [rating, setRating] = useState(0)
  const [toast, setToast] = useState<{
    message: string
    type: 'success' | 'error'
  } | null>(null)

  const handleRemoveMovie = (imdbID: string) => {
    setWatched((prev) => prev.filter((m) => m.imdbID !== imdbID))
  }

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched))
  }, [watched])

  const handleCloseToast = () => setToast(null)

  const handleAddToList = () => {
    if (!selectedMovieCard) return

    if (rating === 0) {
      setToast({
        message: 'Please add a rating before saving the movie.',
        type: 'error',
      })
      return
    }

    const alreadyAdded = watched.some(
      (m) => m.imdbID === selectedMovieCard.imdbID
    )
    if (alreadyAdded) {
      setToast({
        message: `${selectedMovieCard.Title} is already in your list.`,
        type: 'error',
      })
      return
    }

    const newWatchedMovie = { ...selectedMovieCard, rating }
    setWatched((prev) => [...prev, newWatchedMovie])
    setToast({
      message: `Added ${selectedMovieCard.Title} to your list`,
      type: 'success',
    })
    setRating(0)
  }

  const averageImdb =
    watched.length > 0
      ? (
          watched.reduce(
            (sum, movie) => sum + (parseFloat(movie.imdbRating ?? '0') || 0),
            0
          ) / watched.length
        ).toFixed(1)
      : '0.0'

  const averageUserRating =
    watched.length > 0
      ? (
          watched.reduce((sum, movie) => sum + (movie.rating ?? 0), 0) /
          watched.length
        ).toFixed(1)
      : '0.0'

  return (
    <>
      <Navbar>
        <SearchInput placeholder="Search movies..." setMovies={setMovies} />
        <SearchResults results={movies.length} />
      </Navbar>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleCloseToast}
        />
      )}

      <Main>
        <Box openBox={openMovieList} setOpenBox={setOpenMovieList}>
          <ul className="list list-movies no-scrollbar">
            {movies.map((movie) => (
              <MovieCard
                setOpenWatchedBox={setOpenDetails}
                setSelectedMovieCard={setSelectedMovieCard}
                movie={movie}
                key={movie.imdbID}
              />
            ))}
          </ul>
        </Box>

        <Box openBox={openDetails} setOpenBox={setOpenDetails}>
          {openDetails && selectedMovieCard ? (
            <>
              <MovieCardInfo selectedMovieCard={selectedMovieCard} />
              <div className="p-8 ">
                <Rating rating={rating} onRate={setRating}>
                  <AddToListButton onClick={handleAddToList} />
                </Rating>
                <MovieDetails
                  type={selectedMovieCard.Type}
                  imdbID={selectedMovieCard.imdbID}
                  selectedMovieCard={selectedMovieCard}
                />
              </div>
            </>
          ) : (
            <>
              <SummaryCard
                watchedMovieLength={watched.length}
                averageImdbRating={averageImdb}
                averageUserRating={averageUserRating}
              />

              <ul className="list no-scrollbar">
                {watched.map((movie) => (
                  <li key={movie.Title}>
                    <img
                      className="rounded-sm"
                      src={
                        movie.Poster !== 'N/A'
                          ? movie.Poster
                          : '/icon/stream-vault-icon.png'
                      }
                      alt={`${movie.Title} poster`}
                    />
                    <h3>{movie.Title}</h3>
                    <div>
                      <p>
                        <span className="text-[1.1rem] text-accent-light">
                          &#9733;
                        </span>
                        <span>{movie.imdbRating ?? 'N/A'}</span>
                      </p>
                      <p>
                        <span className="text-[1.1rem] text-primary-light">
                          &#9734;
                        </span>
                        <span>{movie.rating ?? '-'}</span>
                      </p>
                    </div>
                    <div
                      className="btn-remove"
                      onClick={() => handleRemoveMovie(movie.imdbID)}
                    >
                      &#x2715;
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Box>
      </Main>
    </>
  )
}
