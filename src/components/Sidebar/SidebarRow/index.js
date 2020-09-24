import React from "react";
import "./index.scss";
import Avatar from "@material-ui/core/Avatar";

function SidebarRow({ src, title, Icon }) {
  return (
    <div className="sidebarRow">
      {Icon && <Icon />}
      {src && <Avatar className="sidebarRow__avatar" src={src} />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
