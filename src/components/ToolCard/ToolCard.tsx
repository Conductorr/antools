import React from "react";
import { Icon } from "../../modules";
import { heart, fileIcon } from "../../assets/svg";
import { toolsConfig } from "../../templates/MainPagePopularTools/toolsConfig";
import styles from "./ToolCard.module.scss";

type Props = {
  viewBox: string;
  path: string;
  name: string;
  price: string
};

function ToolCard({ viewBox, path, name, price }: Props) {
  return (
    <div className={styles.contanier}>
      <div className={styles.test}>
        <div>
          <div className={styles.header}>
            <Icon
              viewBox={viewBox}
              path={path}
              className={styles.header__icon}
            />
            <div className={styles.header_text}>
              <h1 className={styles.header_text__topic}>{name}</h1>
              <h1 className={styles.header_text__description}>{price}</h1>
            </div>
          </div>
          <div className={styles.main}>
            <p className={styles.main__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className={styles.footer}>
            <Icon
              viewBox={heart.viewBox}
              path={heart.path}
              className={styles.footer__icon}
            />
            <Icon
              viewBox={fileIcon.viewBox}
              path={fileIcon.path}
              className={styles.footer__icon}
            />
            <button className={styles.footer_button}>
              <span className={styles.footer_button__text}>Visit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolCard;
