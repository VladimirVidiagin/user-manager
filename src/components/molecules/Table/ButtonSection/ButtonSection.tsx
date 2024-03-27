import { ReactNode } from "react";

export const ButtonSection: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <div className="button-section">{children}</div>;
};
