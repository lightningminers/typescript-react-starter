import React from "react";
import styles from "./style.module.scss";

interface IProps {
  value: string;
}

/**
 * 依据Long和Short改变字体颜色
 * @description Long 绿色 Short 红色 如果远程的字段不是 Long 或 Short 显示原始
 * @param props
 */
const ChangeColor: React.SFC<IProps> = props => {
  const { value, children } = props;
  const side = value.toLowerCase();
  if (side === "long" || side === "short") {
    return <div className={styles[side]}>{children}</div>;
  } else {
    return <>{children}</>;
  }
};

export default ChangeColor;
