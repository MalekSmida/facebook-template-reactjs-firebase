import React from "react";

// node modules
import Avatar from "@material-ui/core/Avatar";

// local files
import "./index.scss";

/**
 * present stories that appear in StoryReel component
 *
 * @param {String} image
 * @param {String} profileAvatar
 * @param {String} title
 */
function Story({ image, profileAvatar, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={profileAvatar} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
