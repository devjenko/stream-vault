import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import type { movie } from "./types/movie";
import Main from "./components/Main";

export default function App() {
  const [movies, setMovies] = useState<movie[]>([]);

  return (
    <>
      <Navbar movies={movies} setMovies={setMovies} />
      <Main movies={movies} />
    </>
  );
}
