import React from "react";
import { ToolCard } from "../../components";
import { toolsConfig } from "./toolsConfig";
import styles from "./MainPagePopularTools.module.scss";

function MainPagePopularTools() {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>
        <h1 className={styles.topic__heading}>Most Popular Tools</h1>
        <p className={styles.topic__description}>
          Tools for the best Designers and Developers most popularly used in the
          world
        </p>
      </div>

      <div className={styles.tools}>
        {toolsConfig.map((item: any) => (
          <ToolCard name={item.name} viewBox={item.viewBox} path={item.path} />
        ))}
      </div>
      <div className={styles.footer}>
        <button className={styles.footer__button}>
          <span className={styles.footer__button_text}>Load more</span>
        </button>
      </div>
    </div>
  );
}

export default MainPagePopularTools;
