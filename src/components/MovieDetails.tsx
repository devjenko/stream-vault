import type { Movie } from '../types/movie'

interface MovieDetailsProps {
  type: string
  imdbID: string
  selectedMovieCard: Movie
}

const MovieDetails = ({
  type,
  imdbID,
  selectedMovieCard,
}: MovieDetailsProps) => {
  const details = [
    { name: 'Movie Type', value: type },
    { name: 'Movie IMDB ID', value: imdbID },
  ]
  return (
    <>
      {details.map((detail) => (
        <div
          key={detail.name}
          className="flex flex-col px-4! pt-6! text-xl min-h-full gap-4"
        >
          <span>
            {detail.name}
            <br />
            <p className="text-[1.3rem] text-text-muted">{detail.value}</p>
          </span>
        </div>
      ))}
      <div className="text-xl text-green-400 mt-6! px-4! ">
        <a
          target="_blank"
          href={`https://www.youtube.com/results?search_query=${selectedMovieCard.Title}`}
        >
          Watch Trailer
        </a>
      </div>
    </>
  )
}

export default MovieDetails
