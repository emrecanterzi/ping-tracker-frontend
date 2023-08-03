import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../features/auth/asyncActions";
import { IAppDispatch, IRootState } from "../../app/store";

const Login = () => {
  const dispatch = useDispatch<IAppDispatch>();
  const user = useSelector<
    IRootState,
    {
      userId: string;
      email: string;
      firstName: string;
      lastName: string;
    }
  >((state) => state.auth.user);

  useEffect(() => {
    console.log(user);
    console.log(localStorage.getItem("token"));
  }, [user]);

  const [loginData, setLoginData] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(loginAction(loginData));
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
      </form>

      {/* <img className={styles.bgImg} src={BgImg} alt="" /> */}
    </div>
  );
};

export default Login;
