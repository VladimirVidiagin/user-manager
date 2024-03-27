import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ModalWindow } from "../../molecules/ModalWindow/ModalWindow";
import { Input } from "../../atoms/Input/Input";
import { CreateUserForm } from "../../molecules/CreateUserForm/CreateUserForm";
import { Button } from "../../atoms/buttons/ReusableButton/ReusableButton";
import { ButtonTitle } from "../../atoms/buttons/ButtonTitle/ButtonTitle";
import { UsersActionTypes } from "../../../store/users/actionTypes";

export const CreateUserModal: React.FC<{ handleCloseModal: () => void }> = ({
  handleCloseModal,
}) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    surname: "",
    name: "",
    middleName: "",
    email: "",
    login: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formValues.surname &&
      formValues.name &&
      formValues.middleName &&
      formValues.email &&
      formValues.login
    ) {
      dispatch({
        type: UsersActionTypes.CREATE_USER,
        payload: {
          id: uuidv4(),
          ...formValues,
        },
      });
      handleCloseModal();
    }
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    handleCloseModal();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formValid = !!(
    formValues.surname &&
    formValues.name &&
    formValues.middleName &&
    formValues.email &&
    formValues.login
  );

  return (
    <ModalWindow
      modalTitle="Создание пользователя"
      confirmButton={
        <Button onClick={handleSubmit} disabled={!formValid}>
          <ButtonTitle disabled={!formValid}>Создать</ButtonTitle>
        </Button>
      }
      handleCancel={handleCancel}
    >
      <CreateUserForm onSubmit={handleSubmit} onCancel={handleCancel}>
        <Input
          labelText="Фамилия"
          placeholder="Введите фамилию"
          name="surname"
          value={formValues.surname}
          onChange={handleChange}
        />
        <Input
          labelText="Имя"
          placeholder="Введите имя"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        <Input
          labelText="Отчество"
          placeholder="Введите отчество"
          name="middleName"
          value={formValues.middleName}
          onChange={handleChange}
        />
        <Input
          labelText="E-mail"
          placeholder="Введите электронную почту"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <Input
          labelText="Логин"
          placeholder="Введите логин"
          name="login"
          value={formValues.login}
          onChange={handleChange}
        />
      </CreateUserForm>
    </ModalWindow>
  );
};
