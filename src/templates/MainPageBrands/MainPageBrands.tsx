import React from "react";
import { Icon } from "../../modules";
import { slackLogos, microsoft, wordpress, google } from "../../assets/svg";
import styles from "./MainPageBrands.module.scss";

function MainPageBrands() {
  return (
    <div className={styles.container}>
      <div className={styles.container__inner}>
        <h1 className={styles.container__inner_heading}>
          Trusted more than 150+ brand
        </h1>
        <div className={styles.container__inner__footer}>
          <Icon
            viewBox={microsoft.viewBox}
            path={microsoft.path}
            className={styles.container__inner__footer_icon}
          />
          <Icon
            viewBox={google.viewBox}
            path={google.path}
            className={styles.container__inner__footer_icon}
          />
          <Icon
            viewBox={slackLogos.viewBox}
            path={slackLogos.path}
            className={styles.container__inner__footer_icon}
          />
          <Icon
            viewBox={wordpress.viewBox}
            path={wordpress.path}
            className={styles.container__inner__footer_icon}
          />
        </div>
      </div>
    </div>
  );
}

export default MainPageBrands;
