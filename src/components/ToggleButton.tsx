interface ToggleButtonProps {
  isOpen: boolean
  onToggle: () => void
}

const ToggleButton = ({ isOpen, onToggle }: ToggleButtonProps) => {
  return (
    <button className="btn-toggle" onClick={onToggle}>
      {isOpen ? '+' : '-'}
    </button>
  )
}

export default ToggleButton
