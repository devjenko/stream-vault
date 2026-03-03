import { useEffect, useState } from 'react'

import ToggleButton from './ToggleButton'
import SummaryCard from './SummaryCard'
import MovieStats from './MovieStats'
import MovieCardInfo from './MovieCardInfo'
import type { Movie, SelectedMovie } from '../types/movie'
import Rating from './Rating'
import AddToListButton from './AddToListButton'

const WatchedBox = ({
  openWatchedBox,
  selectedMovieCard,
}: {
  openWatchedBox: boolean
  selectedMovieCard: SelectedMovie
}) => {
  const [isOpen2, setIsOpen2] = useState(true)
  const [watched, setWatched] = useState<Movie[]>(() => {
    const saved = localStorage.getItem('watched')
    return saved ? JSON.parse(saved) : []
  })
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  // Set watched data to persist in local storage
  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched))
  }, [watched])

  const clearRating = () => {
    setHover(0)
    setRating(0)
  }

  const average = (arr: number[]) => {
    const len = arr.length
    return arr.reduce((acc, cur) => acc + cur / len, 0)
  }

  const avgRank = Math.floor(average(watched.map((movies) => movies['#RANK'])))
  const avgYear = Math.floor(average(watched.map((movies) => movies['#YEAR'])))

  const handleAddToList = () => {
    if (!selectedMovieCard) return
    const newWatchedMovie = { ...selectedMovieCard, rating: rating }

    setWatched((prev) => [...prev, newWatchedMovie])

    alert(
      `Successfully added: ${selectedMovieCard['#TITLE']} with a rating of ${rating}`
    )
  }

  const handleRemoveMovie = (title: string) => {
    setWatched((prev) => prev.filter((m) => m['#TITLE'] !== title))
  }

  return (
    <div className="box no-scrollbar" onMouseLeave={clearRating}>
      {' '}
      <ToggleButton isOpen={isOpen2} setIsOpen={setIsOpen2} />
      {isOpen2 && (
        <>
          {openWatchedBox && selectedMovieCard ? (
            <>
              <MovieCardInfo
                selectedMovieCard={selectedMovieCard}
              />
              <div className="p-20! h-full">
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
                <MovieStats imdbRating={avgRank} userRating={avgYear} />
              </SummaryCard>
              <ul className="list no-scrollbar">
                {watched.map((movie) => (
                  <li key={movie['#TITLE']}>
                    <img
                      src={movie['#IMG_POSTER']}
                      alt={`${movie['#TITLE']} poster`}
                    />
                    <h3>{movie['#TITLE']}</h3>
                    <div>
                      <MovieStats
                        imdbRating={movie['#RANK']}
                        userRating={movie['#YEAR']}
                      />
                    </div>
                    <div
                      onClick={() => handleRemoveMovie(movie['#TITLE'])}
                      className="text-red-500 absolute right-20 cursor-pointer"
                    >
                      x
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default WatchedBox
