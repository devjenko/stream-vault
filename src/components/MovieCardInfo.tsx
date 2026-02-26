
import type { movie } from "../types/movie"



const MovieCardInfo = ({selectedMovieCard}:{selectedMovieCard:movie}) => {

  return (
    <div className="flex">

         <img width={120} height={120} src={selectedMovieCard["#IMG_POSTER"]} alt={selectedMovieCard["#TITLE"]} />
         <div className="bg-red-500">
             <h1>{selectedMovieCard["#TITLE"]}</h1>
             <div className="flex">
                 <p>{selectedMovieCard["#YEAR"]}</p>
                 <p>{selectedMovieCard["#AKA"]}</p>
             </div>
         </div>

   </div>
  )
}

export default MovieCardInfo