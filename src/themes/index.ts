import development from "./development.module.css";
import testnet from "./testnet.module.css";
import production from "./production.module.css";

const theme = {
  development,
  testnet,
  production
};

type themeKey = "development" | "testnet" | "production";

/**
 * 主题只能处理颜色，字体大小等
 * @param key
 */
const chooseTheme = (key: themeKey) => {
  return theme[key];
}

export default chooseTheme;
