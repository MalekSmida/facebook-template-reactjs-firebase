import React, { forwardRef } from "react";

// node modules
import Avatar from "@material-ui/core/Avatar";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ThumbUpIcon from "@material-ui/icons/ThumbUpAltOutlined";
import NearMeIcon from "@material-ui/icons/NearMeOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";

// local files
import "./index.scss";

const Post = forwardRef(
  ({ profilePic, image, username, timestamp, message }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__top">
          <Avatar
            className="post__top__avatar"
            alt={username}
            src={profilePic}
          />

          <div className="post__top__info">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>
        <div className="post__bottom">
          <p>{message}</p>
        </div>
        <div className="post__image">
          <img src={image} alt="" />
        </div>
        <div className="post__options">
          <div className="post__options__option">
            <ThumbUpIcon />
            <p>Like</p>
          </div>
          <div className="post__options__option">
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
          </div>
          <div className="post__options__option">
            <NearMeIcon />
            <p>Share</p>
          </div>
          <div className="post__options__option">
            <AccountCircleIcon />
            <ExpandMoreIcon />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
