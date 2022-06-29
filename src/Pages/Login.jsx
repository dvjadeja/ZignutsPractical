import React, { useState } from "react";
import { toast } from "react-toastify";
import useForm from "../Hooks/useForm";
import bgImage from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import users from "../utils/users";
import CryptoJS from "crypto-js";
import { SECRET_KEY } from "../constants";

const Login = (props) => {
  const { setUser } = props;
  const { handleChange, errors } = useForm();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const checkUser = () => {
    return users.filter((user) => {
      return user.email === userName && user.password === password;
    })[0];
  };

  const hashPassword = () => {
    return CryptoJS.AES.encrypt(password, SECRET_KEY).toString();
  };

  const loginHandler = () => {
    if (userName && password) {
      const validate = checkUser();

      if (validate) {
        const hashedPassword = hashPassword();

        let user = {
          userId: validate.user_id,
          userName: userName,
          password: hashedPassword,
        };

        let userString = JSON.stringify(user);

        localStorage.setItem("user", userString);
        setUser(hashedPassword);
        history("/");
        toast.success("Logged In Successfully");
      } else {
        toast.error("Username or Password is Incorrect!");
      }
    } else {
      toast.warn("Enter Username or Password");
    }
  };

  return (
    <>
      <div className="container">
        <div className="left-side">
          <div>
            <img src={bgImage} alt="bg" />
          </div>
        </div>
        <div className="right-side">
          <div className="create-account">
            <h3>Login</h3>
          </div>
          <div className="form-input">
            <label htmlFor="email">Your Email Address</label>
            <input
              type="email"
              name="email"
              id=""
              onChange={(e) => {
                handleChange(e);
                setUserName(e.target.value);
              }}
            />
            {errors.email && <h5>{errors.email}</h5>}
            <label htmlFor="password">Your password</label>
            <input
              type="password"
              name="password"
              id=""
              onChange={(e) => {
                handleChange(e);
                setPassword(e.target.value);
              }}
            />
            {errors.password && <h5>{errors.password}</h5>}
          </div>

          <div className="button">
            <button onClick={loginHandler}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
