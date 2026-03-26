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
          <span className="text-[1.2rem]">{watchedMovieLength}</span>
          <span>movies</span>
        </p>
        {children}
      </div>
    </div>
  )
}

export default SummaryCard
