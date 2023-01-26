import React from "react";
import { Icon } from "../../modules";
import { mainLogo } from "../../assets/svg";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.container__inner}>
        <div className={styles.wrapper}>
        <div className={styles.container__inner__logo}>
          <div className={styles.container__inner__logo__media}>
            <Icon
              path={mainLogo.path}
              viewBox={mainLogo.viewBox}
              className={styles.container__inner__logo_icon}
            />
            <h1 className={styles.container__inner__logo_heading}>antools.</h1>
          </div>
          <h6 className={styles.container__inner__logo_topic}>
            Copyright 2021. Antools
          </h6>
          <p className={styles.container__inner__logo_description}>
            Antool is a web collection of information on paid or free Design and
            Development tools
          </p>
        </div>
        <div className={styles.container__inner__contact}>
          <h1 className={styles.container__inner__contact_heading}>
            Contact Us
          </h1>
          <h6 className={styles.container__inner__contact_number}>
            +621987463
          </h6>
          <h6 className={styles.container__inner__contact_addres}>
            M Building, No.10 A
          </h6>
          <h6 className={styles.container__inner__contact_mail}>
            antools@awesome.com
          </h6>
        </div>
        </div>
        <div className={styles.wrapper}>
        <div className={styles.container__inner__categories}>
          <h1 className={styles.container__inner__categories_topic}>
            Categories
          </h1>
          <h6 className={styles.container__inner__categories_design}>Design</h6>
          <h6 className={styles.container__inner__categories_development}>
            Development
          </h6>
        </div>
        <div className={styles.container__inner__info}>
          <h1 className={styles.container__inner__info_heading}>
            Company Info
          </h1>
          <h6 className={styles.container__inner__info_about}>About Us</h6>
          <h6 className={styles.container__inner__info_partners}>
            Our Partners
          </h6>
          <h6 className={styles.container__inner__info_blog}>Blog</h6>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
