# typescript-react-starter

<div align=center>
  <img src="./src/assets/welearnmore.png" width="200"/>
</div>

![license](https://img.shields.io/github/license/lightningminers/typescript-react-starter.svg)
![issues](https://img.shields.io/github/issues/lightningminers/typescript-react-starter.svg)
![languages](https://img.shields.io/github/languages/code-size/lightningminers/typescript-react-starter.svg)

`typescript-react-starter` 是一个 TypeScript Starter 工程，集成了 [ React + React-Router + Redux + Redux-Thunk ]，旨在为 Web 应用程序开发者提供 “开箱即用” 的 TypeScript 工程，开发者只需下载此项目，根据范例即可编写复杂大型的 React 应用。 

## Install

```bash
$ git clone git@github.com:welearnmore/typescript-react-starter.git
$ cd typescript-react-starter
$ yarn
$ npm start
```

使用浏览器访问 `http://localhost:8889/#/`。（更多命令可查看 package.json 的 scripts 字段）

## Version

编译环境：

- node.js > 8.0
- typescript > 3
- git
- yarn
- 支持 editorconfig
- 支持 tslint
- 支持 css modules

React 系列：

```bash
"react": "^16.4.2",
"react-dom": "^16.4.2",
"react-redux": "^5.0.7",
"react-router-dom": "^4.3.1",
"redux": "^4.0.0",
"redux-thunk": "^2.3.0"
```

## 目录结构

顶级目录结构如下：

- src 项目源文件
- typings 自定义声明
- dist 编译后的目录

`src` 目录结构如下：

- components # 通用组件
- pages #页面
  - Home # 自定义的目录
    - flow # redux 相关
      |- actions
      |- reducers
      |- constants
    - components # 此页面组件
    - index.tsx # 页面
    - style.css # 样式
    - types.d.ts # ts 声明
- global # redux store 配置 以及 global reducers
- index.tsx # 入口
- app.tsx # layout & routes

## 使用

在 `pages` 中创建一个目录，假设名为 `Home` （这是开发者可自己约定的命名），然后创建 `index.tsx`，`style.less`文件和 `flow` 目录（创建 `actions.ts`，`constants.ts`，`mainPageReducers.ts`），【如果你不使用redux，完全可以不创建 `flow` 目录】。

编写入口 `index.tsx`：

```javascript
import * as React from "react";
import { connect } from "react-redux";
import * as actions from "./flow/actions";
import * as TYPES from "./types";
import { IStoreState } from "../../global/types";
import { Header } from "./components/Header";
import styles from "./style.css";

const localImage = require("@/assets/welearnmore.png");
const onLineImage: string = "http://images.w3crange.com/welearnmore.png";

class HomeComponent extends React.Component<TYPES.IHomePageProps, TYPES.IHomePageState> {
  constructor(props: TYPES.IHomePageProps) {
    super(props);
    this.state = {
      name: "",
    };
  }

  public actionDataSync = () => {
    this.props.dataSync();
  }

  public actionDataAsync = () => {
    this.props.dataAsync("icepy");
  }

  public setName = () => {
    this.setState({
      name: "icepy",
    });
  }

  public render() {
    const { homePage, global } = this.props;
    const { syncId, asyncId } = homePage;
    const { globalSyncId } = global;
    const { name } = this.state;
    return (
      <div className={styles["container"]}>
        <Header localImageSrc={localImage} onLineImageSrc={onLineImage} />
        <div>
          <button onClick={this.actionDataSync}> dataSync action </button>
          <button onClick={this.actionDataAsync}> dataAsync action </button>
          <button onClick={this.setName}> setState name </button>
        </div>
        <div className={styles["contents"]}>
          <p>
            syncId: {syncId}
          </p>
          <p>
            asyncId: {asyncId}
          </p>
          <p>
            setState name: {name}
          </p>
          <p>
            global Sync Id: {globalSyncId}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { homePage, global } = state;
  return {
    homePage,
    global,
  };
};

const HomePage = connect(mapStateToProps, actions)(HomeComponent);
export default HomePage;

```

编写 `reducers`：

```javascript
import { IAction } from "@/global/types";
import * as CONST from "./constants";
import * as TYPES from "../types";

const initState: TYPES.IHomePageStoreState = {
  syncId: "默认值",
  asyncId: "默认值",
};

export function homeReducers(state = initState, action: IAction): TYPES.IHomePageStoreState {
  const { type, payload } = action;
  switch (type) {
    case CONST.SYNC_DATA:
      return { ...state, syncId: payload.data };
    case CONST.ASYNC_DATA:
      return { ...state, asyncId: payload.data };
    default:
      return { ...state };
  }
}

```

在 `store` 中引入 reducers：

```javascript
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { homeReducers } from "@/pages/Home/flow/homeReducers";
import { globalReducers } from "./reducers";

const composeEnhancers = (window as any) && (window as any).REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const reducer = combineReducers({
  global: globalReducers,
  homePage: homeReducers,
});

export const configureStore = () => createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);

```

## LICENSE

GNU LESSER GENERAL PUBLIC LICENSE Version 3, 29 June 2007
