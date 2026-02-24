import type { SetStateAction } from "react";

interface ToggleButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const ToggleButton = ({ isOpen, setIsOpen }: ToggleButtonProps) => {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
      {isOpen ? "–" : "+"}
    </button>
  );
};

export default ToggleButton;
