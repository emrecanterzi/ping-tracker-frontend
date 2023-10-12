import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { Link, useLocation } from "react-router-dom";
import NavbarAuthSide from "./NavbarAuthSide";

export default function Navbar() {
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  const resizeEvent = () => {
    if (navRef.current) {
      if (window.scrollY < 100) {
        navRef.current.classList.remove(styles.close);
        navRef.current.classList.add(styles.open);
      } else {
        navRef.current.classList.add(styles.close);
        navRef.current.classList.remove(styles.open);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", resizeEvent);

    return () => {
      window.removeEventListener("scroll", resizeEvent);
    };
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
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
