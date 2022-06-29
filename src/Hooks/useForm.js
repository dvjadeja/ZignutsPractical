import { useState } from "react";
import { omit } from "lodash";

const useForm = () => {
  //Form Fields
  const [values, setValues] = useState({});
  //Form Error
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    switch (name) {
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a Valid Email Address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;

      // case "password":
      //   if (
      //     !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
      //   ) {
      //     setErrors({
      //       ...errors,
      //       password:
      //         "Password Chould Contain atleast 8 Characters and containing Uppercase, lowercase and numbers",
      //     });
      //   } else {
      //     let newObj = omit(errors, "password");
      //     setErrors(newObj);
      //   }
      //   break;

      default:
        break;
    }
  };

  //Method to handle form input
  const handleChange = (event) => {
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    setValues({
      ...values,
      [name]: val,
    });
  };
  return {
    values,
    errors,
    handleChange,
  };
};

export default useForm;
