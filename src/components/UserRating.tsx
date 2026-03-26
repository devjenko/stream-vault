const UserRating = ({ rating }: { rating: number }) => {
  return (
    <p>
      <span className="text-[1.1rem] text-primary-light">&#9734;</span>
      <span>{rating}</span>
    </p>
  )
}

export default UserRating
