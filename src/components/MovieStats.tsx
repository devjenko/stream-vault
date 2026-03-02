import ImdbRating from './ImdbRating'
import UserRating from './UserRating'

interface MovieStatsProps {
  imdbRating: number
  userRating: number
}

const MovieStats = ({ imdbRating, userRating }: MovieStatsProps) => {
  return (
    <div className="flex">
      <ImdbRating rating={imdbRating} />
      <UserRating rating={userRating} />
    </div>
  )
}

export default MovieStats
