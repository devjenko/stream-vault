const Runtime = ({ time }: { time: number }) => {
  return (
    <p>
      <span>⏳</span>
      <span>{time} min</span>
    </p>
  )
}

export default Runtime
