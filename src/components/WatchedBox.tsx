import { useState } from "react";
import { tempWatchedData } from "../consts/temp-watched-data";
import ToggleButton from "./ToggleButton";
import SummaryCard from "./SummaryCard";
import MovieStats from "./MovieStats";
import MovieCardInfo from "./MovieCardInfo";
import type { movie } from "../types/movie";

const WatchedBox = ({openWatchedBox, selectedMovieCard, movies}:{openWatchedBox:boolean, selectedMovieCard:movie, movies:movie[]}) => {
  const [isOpen2, setIsOpen2] = useState(true);
  const [watched, setWatched] = useState(tempWatchedData);

  const average = (arr: number[]) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watched.map((movies) => movies.imdbRating));
  const avgUserRating = average(watched.map((movies) => movies.userRating));
  const avgRuntime = average(watched.map((movies) => movies.runtime));

  return (
    <div className="box no-scrollbar">
      {" "}
      <ToggleButton isOpen={isOpen2} setIsOpen={setIsOpen2} />
      {isOpen2 && (
        <>
    
          {openWatchedBox ?  
         <MovieCardInfo movies={movies} selectedMovieCard={selectedMovieCard} />
         :<>
               <SummaryCard watchedMovieLength={watched.length}>
            <MovieStats
              imdbRating={avgImdbRating}
              userRating={avgUserRating}
              runtime={avgRuntime}
            />
          </SummaryCard>
         <ul className="list no-scrollbar">
         {watched.map((movie) => (
           <li key={movie.imdbID}>
             <img src={movie.Poster} alt={`${movie.Title} poster`} />
             <h3>{movie.Title}</h3>
             <div>
               <MovieStats
                 imdbRating={movie.imdbRating}
                 userRating={movie.userRating}
                 runtime={movie.runtime}
               />
             </div>
           </li>
         ))}
       </ul>
}
        </>
      )}
    </div>
  );
};

export default WatchedBox;
