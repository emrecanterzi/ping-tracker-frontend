import React from "react";
import styles from "./style.module.scss";
import { Link, useLocation } from "react-router-dom";
import NavbarAuthSide from "./NavbarAuthSide";

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
            to={"/about"}
            className={[
              styles.menuLink,
              location.pathname === "/about" && styles.active,
            ].join(" ")}
          >
            About
          </Link>
        </li>
        <NavbarAuthSide location={location} />
      </ul>
    </nav>
  );
}
