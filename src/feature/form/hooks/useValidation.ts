import * as yup from "yup";

export const useValidation = () => {

  const validationsSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Более 2х ")
      .typeError("Только буквы")
      .required("Поле обязательно"),
    email: yup
      .string()
      .email("Эмейл не верный")

      .required("Поле обязательно"),
    password: yup
      .string()
      .typeError("Только цыфры")
      .min(4, "Минимальное колличество цыфр не меньше 4")
      .required("Поле обязательно"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают")
      .typeError("Только цыфры")
      .min(4, "Минимальное колличество цыфр не меньше 4")
      .required("Поле обязательно"),
  });
  return{validationsSchema}
};







