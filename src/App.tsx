import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";

import { tempWatchedData } from "./consts/temp-watched-data";
import Box from "./components/Box";
import ToggleButton from "./components/ToggleButton";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";
import { searchMovies } from "./utils/searchMovies";
import type { Movie } from "./types/movie";
import MovieCard from "./components/MovieCard";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  useEffect(() => {
    if (!query) return;

    const timeout = setTimeout(async () => {
      try {
        const res = await searchMovies(query);
        setMovies(res.description ?? []);
      } catch (error) {
        console.log("Failed to fetch movies", error);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <>
      <Navbar>
        <SearchInput
          placeholder="Search for movies..."
          value={query}
          onSearch={(e) => setQuery(e.target.value)}
        />
        <SearchResults results={movies.length} />
      </Navbar>

      <main className="main">
        <Box>
          <ToggleButton isOpen={isOpen1} setIsOpen={setIsOpen1} />
          {isOpen1 && (
            <ul className="list">
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
        </Box>

        <Box>
          <ToggleButton isOpen={isOpen2} setIsOpen={setIsOpen2} />
          {isOpen2 && (
            <>
              <div className="summary">
                <h2>Movies you watched</h2>
                <div>
                  <p>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                  </p>
                  <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                  </p>
                </div>
              </div>

              <ul className="list">
                {watched.map((movie) => (
                  <li key={movie.imdbID}>
                    <img src={movie.Poster} alt={`${movie.Title} poster`} />
                    <h3>{movie.Title}</h3>
                    <div>
                      <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Box>
      </main>
    </>
  );
}
