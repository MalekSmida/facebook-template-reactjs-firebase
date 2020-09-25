import React from "react";
import "./index.scss";
import StoryReel from "../StoryReel";
import AddPost from "../AddPost";
import Post from "../Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <AddPost />
      <Post />
    </div>
  );
}

export default Feed;
