import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { signUpAction } from "../../features/auth/asyncActions";

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }>({ firstName: "", lastName: "", email: "", password: "" });

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(signUpAction(signUpData)).then((res) => {
      navigate("/dashboard");
    });
  };

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.form}>
        <h4 className={styles.title}>Welcome</h4>
        <p className={styles.description}>
          Sign up your account using email and password
        </p>
        <div className={styles.formGroup}>
          <input
            placeholder="First Name"
            className={styles.input}
            type="text"
            id="firstName"
            name="firstName"
            value={signUpData.firstName}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            placeholder="Last Name"
            className={styles.input}
            type="text"
            id="lastName"
            name="lastName"
            value={signUpData.lastName}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            placeholder="Email Address"
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={signUpData.email}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            placeholder="Password"
            className={styles.input}
            type="password"
            id="password"
            name="password"
            value={signUpData.password}
            onChange={changeHandler}
          />
        </div>

        <div className={styles.btnGroup}>
          <a href="/#" className={styles.btnLink}>
            Forgot Password
          </a>
          <button type="submit" className={styles.submitBtn}>
            Sign Up
          </button>
        </div>
        <a href="/login" className={styles.toggleAuthLink}>
          Login
        </a>
      </form>
    </div>
  );
};

export default SignUp;
