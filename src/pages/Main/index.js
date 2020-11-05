import React from "react";
import "./index.scss";
import { Header, Sidebar, Feed, Widgets } from "../../components";

function Main() {
  return (
    <div className="main">
      <Header />
      <div className="main__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default Main;
