import { useState } from "react";
import { TableButton } from "../../atoms/buttons/TableButton/TableButton";
import IconDelete from "../../atoms/icons/IconDelete";
import IconEdit from "../../atoms/icons/IconEdit";
import { ColumnnTitle } from "../../atoms/table/ColumnTitle/ColumnTitle";
import { ContentCell } from "../../atoms/table/ContentCell/ContentCell";
import { TableRow } from "../../atoms/table/TableRow/TableRow";
import { ButtonSection } from "./ButtonSection/ButtonSection";
import { EditUserModal } from "../../organisms/EditUserModal/EditUserModal";
import { DeleteUserModal } from "../../organisms/DeleteUserModal/DeleteUserModal";

export const Table: React.FC<{
  titles: string[];
  tableContent: any[];
  selectedProperties: string[];
}> = ({ titles, tableContent, selectedProperties }) => {
  const [isEditUserMadalOpen, setIsEditUserModalOpen] = useState(false);
  const [isDeleteUserMadalOpen, setIsDeleteUserModalOpen] = useState(false);
  const [chosenUserId, setChosenId] = useState<string | null>(null);

  const handleEditClick = (userId: string) => {
    setIsEditUserModalOpen(true);
    setChosenId(userId);
  };

  const handleCloseEditUserModal = () => {
    setIsEditUserModalOpen(false);
  };

  const handleDeleteClick = (userId: string) => {
    setIsDeleteUserModalOpen(true);
    setChosenId(userId);
  };
  const handleCloseDeleteUserModal = () => {
    setIsDeleteUserModalOpen(false);
  };

  return (
    <>
      <table className="table">
        <thead>
          <TableRow titleRow>
            {titles.map((title) => (
              <ColumnnTitle key={title}>{title}</ColumnnTitle>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {tableContent.map((rowContent: any) => (
            <TableRow key={rowContent.id}>
              {selectedProperties.map((property) => (
                <ContentCell key={property}>
                  {rowContent[property]?.toString()}
                </ContentCell>
              ))}
              <ContentCell>
                <ButtonSection>
                  <TableButton
                    icon={<IconEdit />}
                    userId={rowContent.id}
                    onEditClick={handleEditClick}
                  />
                  <TableButton
                    userId={rowContent.id}
                    onEditClick={handleDeleteClick}
                    icon={<IconDelete />}
                  />
                </ButtonSection>
              </ContentCell>
            </TableRow>
          ))}
        </tbody>
      </table>
      {isEditUserMadalOpen && chosenUserId && (
        <EditUserModal
          handleCloseModal={handleCloseEditUserModal}
          chosenUserId={chosenUserId}
        />
      )}
      {isDeleteUserMadalOpen && chosenUserId && (
        <DeleteUserModal
          handleCloseModal={handleCloseDeleteUserModal}
          chosenUserId={chosenUserId}
        />
      )}
    </>
  );
};
