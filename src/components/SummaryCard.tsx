interface SummaryCardProps {
  watchedMovieLength: number
  averageImdbRating: string
  averageUserRating: string
}

const SummaryCard = ({
  watchedMovieLength,
  averageImdbRating,
  averageUserRating,
}: SummaryCardProps) => {
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span className="text-[1.2rem]">{watchedMovieLength}</span>
          <span>movies</span>
        </p>
        <div className="flex items-center gap-8">
          <p>
            <span className="text-[1.1rem] text-accent-light">&#9733;</span>
            <span>{averageImdbRating}</span>
          </p>
          <p>
            <span className="text-[1.1rem] text-primary-light">&#9734;</span>
            <span>{averageUserRating}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SummaryCard
