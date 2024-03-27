import { useState } from "react";
import { useTypedSelector } from "../../../App/hooks/useTypedSelector";
import { Button } from "../../atoms/buttons/ReusableButton/ReusableButton";
import { ButtonTitle } from "../../atoms/buttons/ButtonTitle/ButtonTitle";
import IconPlus from "../../atoms/icons/IconPlus";
import { SubHeader } from "../../molecules/SubHeader/SubHeader";
import { Table } from "../../molecules/Table/Table";
import { CreateUserModal } from "../CreateUserModal/CreateUserModal";

export const UsersInfoBlock: React.FC = () => {
  const [isCreateUserMadalOpen, setIsCreateUserModalOpen] = useState(false);
  const { users } = useTypedSelector((state) => state.users);
  console.log("users", users);
  const handleCloseCreateUserModal = () => {
    setIsCreateUserModalOpen(false);
  };
  return (
    <>
      <main className="user-info-block">
        <SubHeader>
          <h2>Пользователи</h2>
          <Button onClick={() => setIsCreateUserModalOpen(true)}>
            <IconPlus />
            <ButtonTitle>Добавить</ButtonTitle>
          </Button>
        </SubHeader>
        <Table
          titles={["Фамилия", "Имя", "Отчество", "E-mail", "Логин", ""]}
          tableContent={users}
          selectedProperties={[
            "surname",
            "name",
            "middleName",
            "email",
            "login",
          ]}
        />
      </main>
      {isCreateUserMadalOpen && (
        <CreateUserModal handleCloseModal={handleCloseCreateUserModal} />
      )}
    </>
  );
};
