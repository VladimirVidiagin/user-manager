import { ReactNode, MouseEvent } from "react";

export const Button: React.FC<{
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  styleType?: string;
}> = ({ children, onClick, disabled = false, styleType = "primary" }) => {
  return (
    <button
      className={`button ${styleType}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
