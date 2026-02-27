const SummaryCard = ({
  watchedMovieLength,
  children,
}: {
  watchedMovieLength: number
  children: React.ReactNode
}) => {
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watchedMovieLength} movies</span>
        </p>
        {children}
      </div>
    </div>
  )
}

export default SummaryCard
