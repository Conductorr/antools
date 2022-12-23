import React from "react";
import { Icon } from "../../modules";
import { searchIcon, faceBook, instagram, twitter } from "../../assets/svg";
import styles from "./MainPageHeading.module.scss";

function MainPageHeading() {
  return (
    <div className={styles.container}>
      <div className={styles.media}>
        <h1 className={styles.media_heading}>
          Awesome tools for Designer & Developer
          <span className={styles.media_heading__sign}>.</span>
        </h1>
        <p className={styles.media_description}>
          Antool is a web collection of information on paid or free Design and
          Development tools
        </p>
        <div className={styles.media_search}>
          <div className={styles.media_search_container}>
            <Icon
              viewBox={searchIcon.viewBox}
              path={searchIcon.path}
              className={styles.media_search_container__icon}
            />
            <p className={styles.media_search_container__description}>
              find more than 430+ tools...
            </p>
            <button className={styles.media_search_container__button}>
              <span className={styles.media_search_container__button__text}>
                Search
              </span>
            </button>
          </div>
        </div>
        <div className={styles.media_footer}>
          <Icon
            viewBox={faceBook.viewBox}
            path={faceBook.path}
            className={styles.media_footer__icon}
          />
          <Icon
            viewBox={instagram.viewBox}
            path={instagram.path}
            className={styles.media_footer__icon}
          />
          <Icon
            viewBox={twitter.viewBox}
            path={twitter.path}
            className={styles.media_footer__icon}
          />
        </div>
      </div>
      <div className={styles.illustration}>
        <img src={"src/assets/png/Illustration.png"} alt="illustration" />
      </div>
    </div>
  );
}

export default MainPageHeading;
