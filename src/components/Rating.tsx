import { useState } from 'react'

interface RatingProps {
  rating: number
  onRate: (value: number) => void
  children?: React.ReactNode
}

const Rating = ({ rating, onRate, children }: RatingProps) => {
  const [hover, setHover] = useState(0)
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
              onClick={() => onRate(starValue)}
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

      {rating > 0 ? children : null}
    </div>
  )
}

export default Rating
