import { useDispatch } from "react-redux";
import { ModalWindow } from "../../molecules/ModalWindow/ModalWindow";
import { Button } from "../../atoms/buttons/ReusableButton/ReusableButton";
import { ButtonTitle } from "../../atoms/buttons/ButtonTitle/ButtonTitle";
import { UsersActionTypes } from "../../../store/users/actionTypes";
import { useTypedSelector } from "../../../App/hooks/useTypedSelector";

export const DeleteUserModal: React.FC<{
  handleCloseModal: () => void;
  chosenUserId: string;
}> = ({ handleCloseModal, chosenUserId }) => {
  const dispatch = useDispatch();

  const { users } = useTypedSelector((state) => state.users);

  const chosenUserInfo = users.find((user) => user.id === chosenUserId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({
      type: UsersActionTypes.DELETE_USER,
      payload: chosenUserInfo?.id,
    });
    handleCloseModal();
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    handleCloseModal();
  };

  return (
    <ModalWindow
      modalTitle="Удаление пользователя"
      confirmButton={
        <>
          <Button styleType="secondary" onClick={handleCancel}>
            <ButtonTitle styleType="secondary">Отменить</ButtonTitle>
          </Button>
          <Button onClick={handleSubmit}>
            <ButtonTitle>Удалить</ButtonTitle>
          </Button>
        </>
      }
      handleCancel={handleCancel}
    >
      <span>Удалить выбранного пользователя?</span>
    </ModalWindow>
  );
};
