import { UsersState, UsersActions, UsersActionTypes } from "./actionTypes";

const initialState: UsersState = {
  users: [
    {
      id: "1",
      surname: "Казанцев",
      name: "Евгений",
      middleName: "Сергеевич",
      email: "kazEvgSer@yandex.ru",
      login: "kazantsev_es",
    },
    {
      id: "2",
      surname: "Луконин",
      name: "Анатолий",
      middleName: "Дмитриевич",
      email: "lukmir@yandex.ru",
      login: "lukonin_ad",
    },
    {
      id: "3",
      surname: "Тющенко",
      name: "Алина",
      middleName: "Александровна",
      email: "alinaAlex@gmail.com",
      login: "tuschenko_aa",
    },
    {
      id: "4",
      surname: "Куликов",
      name: "Анатолий",
      middleName: "Владимирович",
      email: "anatoliykulak@yandex.ru",
      login: "kulikov_av",
    },
    {
      id: "5",
      surname: "Лесков",
      name: "Владимир",
      middleName: "Петрович",
      email: "lesIgory@gmail.com",
      login: "leskov_vp",
    },
    {
      id: "6",
      surname: "Ежова",
      name: "Камила",
      middleName: "Евгеньевна",
      email: "keEzh@yandex.ru",
      login: "ezhova_ke",
    },
  ],
};

export const userReducer = (
  state = initialState,
  action: UsersActions
): UsersState => {
  switch (action.type) {
    case UsersActionTypes.CREATE_USER:
      return { users: [action.payload, ...state.users] };
    case UsersActionTypes.EDIT_USER:
      return {
        users: [
          action.payload,
          ...state.users.filter((user) => user.id !== action.payload.id),
        ],
      };
    case UsersActionTypes.DELETE_USER:
      return {
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
