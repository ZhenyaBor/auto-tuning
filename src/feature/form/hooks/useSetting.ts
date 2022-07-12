interface Values {
    firstName: string;
    password: string;
    email: string;
    confirmPassword: string;
  }

export const useSetting = () => {

  const onSubmit = (values:Values) => {
    console.log(values);
  };

  return {
    onSubmit,
  };
};







