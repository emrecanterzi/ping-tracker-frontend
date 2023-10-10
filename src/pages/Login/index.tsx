import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../features/auth/asyncActions";
import { AppDispatch, RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const isLogined = useSelector<RootState>((state) => state.auth.loginned);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogined) {
      navigate("/dashboard");
    }
  }, [isLogined, navigate]);

  const [loginData, setLoginData] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(loginAction(loginData)).then(() => {
      navigate("/dashboard");
    });
  };

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.form}>
        <h4 className={styles.title}>Welcome Back</h4>
        <p className={styles.description}>
          Log into your account using email and password
        </p>
        <div className={styles.formGroup}>
          <input
            placeholder="Email Address"
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={loginData.email}
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
            value={loginData.password}
            onChange={changeHandler}
          />
        </div>

        <div className={styles.btnGroup}>
          <a href="/#" className={styles.btnLink}>
            Forgot Password
          </a>
          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </div>
        <a href="/signup" className={styles.toggleAuthLink}>
          Sign Up
        </a>
      </form>
    </div>
  );
};

export default Login;
