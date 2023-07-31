import React from "react";
import styles from "./style.module.scss";

const Login = () => {
  const onLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onLogin} className={styles.form}>
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
          />
        </div>
        <div className={styles.formGroup}>
          <input
            placeholder="Password"
            className={styles.input}
            type="password"
            id="password"
            name="password"
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
