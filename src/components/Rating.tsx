import { type SetStateAction } from 'react'

interface RatingProps {
  hover: number
  setHover: React.Dispatch<SetStateAction<number>>
  rating: number
  setRating: React.Dispatch<SetStateAction<number>>
  children: React.ReactNode
}

const Rating = ({
  hover,
  rating,
  setHover,
  setRating,
  children,
}: RatingProps) => {
  const amountOfStars = Array.from({ length: 10 })

  return (
    <div className="p-10! bg-[#343a40] rounded-lg ">
      {amountOfStars.map((_, index) => {
        const starValue = index + 1

        return (
          <span
            key={index}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(starValue)}
            className={`text-5xl cursor-pointer ${starValue <= (hover || rating) ? 'text-yellow-500' : 'text-white'}`}
          >
            {starValue <= (hover || rating) ? '★' : '☆'}
          </span>
        )
      })}

      {children}
    </div>
  )
}

export default Rating
