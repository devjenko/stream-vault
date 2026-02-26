import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";
import type { movie } from "../types/movie";
import { useState } from "react";

const Main = ({ movies }: { movies: movie[] }) => {
  const [openWatchedBox, setOpenWatchedBox] = useState(false);
  const [selectedMovieCard, setSelectedMovieCard] = useState("");
  return (
    <main className="main">
      <ListBox  setSelectedMovieCard={setSelectedMovieCard} setOpenWatchedBox={setOpenWatchedBox} movies={movies} />
      <WatchedBox selectedMovieCard={selectedMovieCard} openWatchedBox={openWatchedBox} movies={movies} />
    </main>
  );
};

export default Main;
