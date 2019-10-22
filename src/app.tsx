import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { IStoreState } from "./store/shared";
import { updateUserId } from "./store/global";
import Home from "./pages/home";

const App = () => {
  const global = useSelector((state: IStoreState) => ({
    ...state.global
  }));
  const dispatch = useDispatch();
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <div>
        <button onClick={() => {
          dispatch(updateUserId(2));
        }}>
          Hooks Click [UserId={global.userId}]
        </button>
      </div>
    </Router>
  )
}

export default App;
