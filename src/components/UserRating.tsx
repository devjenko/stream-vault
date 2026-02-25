const UserRating = ({ rating }: { rating: number }) => {
  return (
    <p>
      <span>🌟</span>
      <span>{rating}</span>
    </p>
  );
};

export default UserRating;
