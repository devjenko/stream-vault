import type { SetStateAction } from "react";
import type { movie } from "../types/movie";


interface MovieCardProps  {
  setOpenWatchedBox: React.Dispatch<SetStateAction<boolean>>;
  setSelectedMovieCard:React.Dispatch<SetStateAction<movie[]>>;
  movie:movie[];
}

const MovieCard = ({  setOpenWatchedBox, setSelectedMovieCard, movie }: MovieCardProps) => {

  const handleClick = () => {
    setOpenWatchedBox(true);
    setSelectedMovieCard(movie);
  }

  return (
    <li key={movie["#TITLE"]} className="cursor-pointer" onClick={handleClick}>
      <img src={movie["#IMG_POSTER"]} alt={`${movie["#TITLE"]} poster`} width={100} height={100} />
      <h3>{movie["#TITLE"]}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie["#YEAR"]}</span>
        </p>
      </div>
    </li>
  );
};

export default MovieCard;
