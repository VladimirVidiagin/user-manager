import { ReactNode } from "react";

export const TableRow: React.FC<{
  children: ReactNode;
  titleRow?: boolean;
}> = ({ children, titleRow = false }) => {
  return (
    <tr className="table-row" style={{ height: titleRow ? "40px" : "48px" }}>
      {children}
    </tr>
  );
};
