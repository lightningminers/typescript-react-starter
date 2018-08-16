import * as React from "react";
import { IHeaderProps } from "./types";
import "./style.less";

export const Header = (props: IHeaderProps): JSX.Element => {
  const { localImageSrc, onLineImageSrc } = props;
  return (
    <div className="header-container">
      <img src={localImageSrc} />
      <img src={onLineImageSrc} />
    </div>
  );
};
