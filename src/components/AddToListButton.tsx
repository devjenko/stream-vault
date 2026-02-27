const AddToListButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="rounded-full bg-[#6741d9] p-4! w-full text-2xl font-bold mt-10! cursor-pointer"
      onClick={onClick}
    >
      + Add to list
    </button>
  )
}

export default AddToListButton
