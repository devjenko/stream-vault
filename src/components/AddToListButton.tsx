const AddToListButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="btn-add-to-list" onClick={onClick}>
      + Add to list
    </button>
  )
}

export default AddToListButton
