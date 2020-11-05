import React from "react";

// node modules
import Avatar from "@material-ui/core/Avatar";

// local files
import "./index.scss";

/**
 * present each row displays in left Sidebar component
 *
 * @param {String} src      => avatar source image, if exist then displays avatar
 * @param {String} title
 * @param {Object} Icon     => material-ui icon component
 */
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
