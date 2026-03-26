const ImdbRating = ({ rating }: { rating: number }) => {
  return (
    <p>
      <span className="text-[1.1rem] text-accent-light">&#9733;</span>
      <span>{rating}</span>
    </p>
  )
}

export default ImdbRating
