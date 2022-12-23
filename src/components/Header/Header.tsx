import React from "react";
import { Icon } from "../../modules";
import { mainLogo } from "../../assets/svg";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
      <Icon
        path={mainLogo.path}
        viewBox={mainLogo.viewBox}
        className={styles.logo_icon}
      />
      <h1 className={styles.logo_heading}>antools</h1>
        </div>
      <div className={styles.navigation}>
        <ul className={styles.navigation_list}>
          <li className={styles.navigation_list__item}>Home</li>
          <li className={styles.navigation_list__item}>Categories</li>
          <li className={styles.navigation_list__item}> My Collections</li>
          <li className={styles.navigation_list__item}>Blog</li>
        </ul>
      </div>
      <div className={styles.authentication}>
          <h6 className={styles.authentication_login}>Login</h6>
          <button className={styles.authentication_signUp}><span className={styles.authentication_signUp__text}>Sign Up</span></button>
      </div>
    </div>
  );
}

export default Header;
