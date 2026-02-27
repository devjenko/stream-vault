import { useState } from 'react'
import AddToListButton from './AddToListButton'

const Rating = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const amountOfStars = Array.from({ length: 10 })

  const clearRating = () => {
    setHover(0)
    setRating(0)
  }

  return (
    <div onMouseLeave={clearRating} className="p-10! bg-[#343a40] rounded-lg ">
      {amountOfStars.map((_, index) => {
        const starValue = index + 1

        return (
          <span
            key={index}
            onMouseEnter={() => setHover(starValue)}
            onClick={() => setRating(starValue)}
            className={`text-5xl cursor-pointer ${starValue <= (hover || rating) ? 'text-yellow-500' : 'text-white'}`}
          >
            {starValue <= (hover || rating) ? '★' : '☆'}
          </span>
        )
      })}

      {rating ? <AddToListButton /> : null}
    </div>
  )
}

export default Rating
