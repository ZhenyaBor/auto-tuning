interface Values {
    firstName: string;
    password: string;
    email: string;
    confirmPassword: string;
  }


export const useSetting = () => {

    const onSubmit = (data:Values)=>{
        console.log("evfbk"+ data.email)
    }

    return{onSubmit}
  };
  