import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./index.scss";

function Story({ image, profileAvatar, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={profileAvatar} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
