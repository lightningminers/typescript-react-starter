import * as React from "react";
import { IHeaderProps } from "./types";
import styles from "./style.css";

export const Header: React.SFC<IHeaderProps> = (props: IHeaderProps) => {
  const { localImageSrc, onLineImageSrc } = props;
  return (
    <div className={styles["header-container"]}>
      <img src={localImageSrc} />
      <img src={onLineImageSrc} />
    </div>
  );
};
