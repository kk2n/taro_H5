import React from "react";
import { Provider } from "react-redux";
import configStore from "./store";
import "./app.scss";

const store = configStore();
export default props => {
  return <Provider store={store}>{props.children}</Provider>;
};
