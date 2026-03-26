import { useEffect, useState } from 'react'

import ToggleButton from './ToggleButton'
import SummaryCard from './SummaryCard'
import MovieCardInfo from './MovieCardInfo'
import type { Movie, SelectedMovie } from '../types/movie'
import type { StateSetter } from '../types/state'
import Rating from './Rating'
import AddToListButton from './AddToListButton'
import Toast from './Toast'

const WatchedBox = ({
  openWatchedBox,
  setOpenWatchedBox,
  selectedMovieCard,
}: {
  openWatchedBox: boolean
  setOpenWatchedBox: StateSetter<boolean>
  selectedMovieCard: SelectedMovie
}) => {
  const [isOpen2, setIsOpen2] = useState(true)
  const [watched, setWatched] = useState<Movie[]>(() => {
    const saved = localStorage.getItem('watched')
    return saved ? JSON.parse(saved) : []
  })
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [toast, setToast] = useState<{
    message: string
    type: 'success' | 'error'
  } | null>(null)

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched))
  }, [watched])

  const clearRating = () => {
    setHover(0)
    setRating(0)
  }

  const avgImdb = watched.length
    ? (
        watched.reduce(
          (sum, m) => sum + (parseFloat(m.imdbRating ?? '0') || 0),
          0
        ) / watched.length
      ).toFixed(1)
    : '0.0'

  const avgUserRating = watched.length
    ? (
        watched.reduce((sum, m) => sum + (m.rating ?? 0), 0) / watched.length
      ).toFixed(1)
    : '0.0'

  const handleAddToList = () => {
    if (!selectedMovieCard) return

    const alreadyAdded = watched.some(
      (m) => m.imdbID === selectedMovieCard.imdbID
    )
    if (alreadyAdded) {
      setToast({ message: `${selectedMovieCard.Title} is already in your list.`, type: 'error' })
      return
    }

    const newWatchedMovie = { ...selectedMovieCard, rating }
    setWatched((prev) => [...prev, newWatchedMovie])
    setToast({ message: `Added ${selectedMovieCard.Title} to your list`, type: 'success' })
    setOpenWatchedBox(false)
    setRating(0)
    setHover(0)
  }

  const handleRemoveMovie = (imdbID: string) => {
    setWatched((prev) => prev.filter((m) => m.imdbID !== imdbID))
  }

  return (
    <>
    <div className="box no-scrollbar" onMouseLeave={clearRating}>
      <ToggleButton isOpen={isOpen2} setIsOpen={setIsOpen2} />
      {isOpen2 && (
        <>
          {openWatchedBox && selectedMovieCard ? (
            <>
              <MovieCardInfo selectedMovieCard={selectedMovieCard} />
              <div className="p-8">
                <Rating
                  rating={rating}
                  setRating={setRating}
                  hover={hover}
                  setHover={setHover}
                >
                  {rating ? (
                    <AddToListButton onClick={handleAddToList} />
                  ) : null}
                </Rating>
              </div>
            </>
          ) : (
            <>
              <SummaryCard watchedMovieLength={watched.length}>
                <div className="flex items-center gap-8">
                  <p>
                    <span className="text-[1.1rem] text-accent-light">&#9733;</span>
                    <span>{avgImdb}</span>
                  </p>
                  <p>
                    <span className="text-[1.1rem] text-primary-light">&#9734;</span>
                    <span>{avgUserRating}</span>
                  </p>
                </div>
              </SummaryCard>
              <ul className="list no-scrollbar">
                {watched.map((movie) => (
                  <li key={movie.imdbID}>
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
                        <span className="text-[1.1rem] text-accent-light">&#9733;</span>
                        <span>{movie.imdbRating ?? 'N/A'}</span>
                      </p>
                      <p>
                        <span className="text-[1.1rem] text-primary-light">&#9734;</span>
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
        </>
      )}
    </div>
    {toast && (
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast(null)}
      />
    )}
    </>
  )
}

export default WatchedBox
