import React from "react";
import styles from "./style.module.scss";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className={styles.navbar}>
      <Link to={"/"} className={styles.logo}>
        Ping Tracker
      </Link>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link
            to={"/"}
            className={[
              styles.menuLink,
              location.pathname === "/" && styles.active,
            ].join(" ")}
          >
            Home
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to={"/login"}
            className={[
              styles.menuLink,
              location.pathname === "/login" && styles.active,
            ].join(" ")}
          >
            login
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to={"/signup"}
            className={[
              styles.menuLink,
              location.pathname === "/signup" && styles.active,
            ].join(" ")}
          >
            Sing up
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to={"/about"}
            className={[
              styles.menuLink,
              location.pathname === "/about" && styles.active,
            ].join(" ")}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
