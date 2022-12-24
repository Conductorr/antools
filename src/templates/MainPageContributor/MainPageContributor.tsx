import React from "react";
import styles from "./MainPageContributor.module.scss";

function MainPageContributor() {
  return (
    <div className={styles.container}>
      <h1 className={styles.container_heading}>Become a contributor?</h1>
      <p className={styles.container_description}>
        Join us and get tips & tricks to become a great Designer and Developer
      </p>
      <div className={styles.container__search}>
        <div className={styles.container__search__inner}>
          <p className={styles.container__search__description}>
            Enter your email...
          </p>
          <button className={styles.container__search__button}>
            <span className={styles.container__search__button__text}>
              Search
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPageContributor;
