import React from "react";
import "./index.scss";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Widgets from "../../components/Widgets";

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
