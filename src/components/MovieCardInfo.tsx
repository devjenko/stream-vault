
import type { movie } from "../types/movie"



const MovieCardInfo = ({selectedMovieCard}:{selectedMovieCard:movie}) => {

  return (
    <div className="flex">

         <img  className="object-cover" width={134} height={134} src={selectedMovieCard["#IMG_POSTER"]} alt={selectedMovieCard["#TITLE"]} />
         <div className="py-10! px-14! flex flex-col gap-10 text-xl">
             <h1 className="text-4xl font-bold">{selectedMovieCard["#TITLE"]}</h1>
                 <p>{selectedMovieCard["#YEAR"]}</p>
                 <p>{selectedMovieCard["#ACTORS"]}</p>
                 <span>⭐️ {selectedMovieCard["#RANK"]} IMDb rating</span>
         </div>

   </div>
  )
}

export default MovieCardInfo