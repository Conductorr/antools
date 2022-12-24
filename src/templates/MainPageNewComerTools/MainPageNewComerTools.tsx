import React from "react";
import { Icon } from "../../modules";
import ToolCard from "../../components/ToolCard";
import { newToolsConfig } from "./newToolsConfig";
import { Tcard } from "../../core/types";
import styles from "./MainPageNewComerTools.module.scss";

function MainPageNewComerTools() {
  return (
    <div className={styles.container}>
      <div className={styles.container__description}>
        <h1 className={styles.container__description_heading}>
          Newcomer Tools
        </h1>
        <p className={styles.container__description_topic}>
          Wow! see the latest update of the most recommended tools from reliable
          designers and developers
        </p>
        <button className={styles.container__description_button}>
          <span className={styles.container__description_button_text}>
            Explore more
          </span>
        </button>
      </div>
      <div className={styles.container__tools}>
        {newToolsConfig.map((item: Tcard) => (
          <div key={item.name} className={styles.container__tools__item}>
            <ToolCard
              price={item.price}
              viewBox={item.viewBox}
              path={item.path}
              name={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPageNewComerTools;
