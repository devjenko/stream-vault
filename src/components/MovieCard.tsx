interface MovieCardProps {
  title: string;
  poster: string;
  year: number;
}

const MovieCard = ({ title, poster, year }: MovieCardProps) => {
  return (
    <li>
      <img src={poster} alt={`${title} poster`} width={100} height={100} />
      <h3>{title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{year}</span>
        </p>
      </div>
    </li>
  );
};

export default MovieCard;
