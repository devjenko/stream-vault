import ImdbRating from './ImdbRating'
import Runtime from './Runtime'
import UserRating from './UserRating'

interface MovieStatsProps {
  imdbRating: number
  userRating: number
  runtime: number
}

const MovieStats = ({ imdbRating, userRating, runtime }: MovieStatsProps) => {
  return (
    <div className="flex">
      <ImdbRating rating={imdbRating} />
      <UserRating rating={userRating} />
      <Runtime time={runtime} />
    </div>
  )
}

export default MovieStats
