import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";
import type { movie } from "../types/movie";

const Main = ({ movies }: { movies: movie[] }) => {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox />
    </main>
  );
};

export default Main;
