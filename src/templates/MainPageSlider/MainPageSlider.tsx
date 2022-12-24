import React from "react";
import { Icon } from "../../modules";
import { arrow } from "../../assets/svg";
import styles from "./MainPageSlider.module.scss";

function MainPageSlider() {
  return (
    <div className={styles.container}>
      <Icon
        viewBox={arrow.viewBox}
        path={arrow.path}
        className={styles.container__inner_iconLeft}
      />
      <div className={styles.container__inner}>
        <div className={styles.container__inner__image}>
          <img
            className={styles.container__inner__image_person}
            src={"src/assets/png/ronald.png"}
            alt="ronald"
          />
          <img
            className={styles.container__inner__image_brases}
            src={"src/assets/png/brases.png"}
            alt="ronald"
          />
        </div>
      </div>
      <div className={styles.container__text}>
        <p className={styles.container__text_description}>
          Incididunt cillum do sint sint enim ullamco id deserunt mollit qui
          reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla
          velit labore occaecat do deserunt Lorem magna officia incididunt
          consectetur amet. Sunt consectetur veniam minim ex commodo sint non.
          Occaecat aute officia excepteur non laboris id qui ad.
        </p>
      </div>
      <Icon
        viewBox={arrow.viewBox}
        path={arrow.path}
        className={styles.container__inner_iconRight}
      />
    </div>
  );
}

export default MainPageSlider;
