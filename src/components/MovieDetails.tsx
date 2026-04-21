import type { Movie } from '../types/movie'

interface MovieDetailsProps {
  selectedMovieCard: Movie
}

const MovieDetails = ({
  selectedMovieCard,
}: MovieDetailsProps) => {

  
  return (
    <>
      <p className="text-xl mt-6! px-4!">
        {selectedMovieCard.overview}
      </p>

      <div className="text-xl text-green-400 mt-6! px-4! ">

        <a
          target="_blank"
          href={`https://www.youtube.com/results?search_query=${selectedMovieCard.title} Trailer`}
        >
          Watch Trailer
        </a>
      </div>
    </>
  )
}

export default MovieDetails
