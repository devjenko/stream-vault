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
    <div className="rating-box">
      <div className="flex items-center justify-center gap-1 flex-wrap">
        {amountOfStars.map((_, index) => {
          const starValue = index + 1
          const active = starValue <= (hover || rating)

          return (
            <span
              key={index}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(starValue)}
              className={`star ${active ? 'star-active' : ''}`}
            >
              &#9733;
            </span>
          )
        })}
      </div>

      {rating > 0 && (
        <p className="mt-5 text-center text-[1.3rem] font-medium text-text-muted">
          Your rating: <span className="text-accent-light">{rating}</span>/10
        </p>
      )}

      {children}
    </div>
  )
}

export default Rating
