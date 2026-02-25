import { useState } from "react";
import ToggleButton from "./ToggleButton";
import MovieCard from "./MovieCard";
import type { movie } from "../types/movie";

const Box = ({ movies }: { movies: movie[] }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box no-scrollbar">
      {" "}
      <ToggleButton isOpen={isOpen1} setIsOpen={setIsOpen1} />
      {isOpen1 && (
        <ul className="list no-scrollbar">
          {movies.map((movie) => (
            <MovieCard
              poster={movie["#IMG_POSTER"]}
              title={movie["#TITLE"]}
              year={movie["#YEAR"]}
              key={movie["#IMDB_ID"]}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Box;
