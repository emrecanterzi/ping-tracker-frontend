import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Location, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import { IUser } from "../../interfaces/User";
import styles from "./style.module.scss";
import { logoutAction } from "../../features/auth/asyncActions";

interface IProps {
  location: Location;
}

const NavbarAuthSide = memo(({ location }: IProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user, loginned } = useSelector<
    RootState,
    { user: IUser; loginned: boolean }
  >((state) => state.auth);

  const renderUserAvatarName = (): string => {
    return user.firstName?.split(" ").length === 1
      ? user.firstName
          ?.split(" ")
          .concat(user.lastName)
          .map((name) => name[0].toUpperCase())
          .join("")
      : user.firstName
          ?.split(" ")
          .map((name) => name[0].toUpperCase())
          .join("");
  };

  const logOut = () => {
    dispatch(logoutAction()).then(() => {
      navigate("/login");
    });
  };

  if (loginned) {
    return (
      <>
        <li className={styles.menuItem}>
          <Link
            to={"/dashboard"}
            className={[
              styles.menuLink,
              location.pathname === "/dashboard" && styles.active,
            ].join(" ")}
          >
            Dashboard
          </Link>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.menuLink} onClick={logOut}>
            Logout
          </button>
        </li>
        <li className={styles.menuItem}>
          <Link
            to={"/profile"}
            className={[
              styles.menuLink,
              location.pathname === "/profile" && styles.active,
            ].join(" ")}
          >
            {/* // ! There will be a panel to open here or directly go to profile page */}
            <span className={styles.userCircle}>{renderUserAvatarName()}</span>
          </Link>
        </li>
      </>
    );
  }

  return (
    <>
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
    </>
  );
});

export default NavbarAuthSide;
