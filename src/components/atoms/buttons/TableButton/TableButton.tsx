type TableButtonProps = {
  icon: React.ReactNode;
  userId: string;
  onEditClick: (userId: string) => void;
};

export const TableButton: React.FC<TableButtonProps> = ({
  icon,
  userId,
  onEditClick,
}) => {
  return (
    <button onClick={() => onEditClick(userId)} className="table-button">
      <span className="table-button__icon">{icon}</span>
    </button>
  );
};
