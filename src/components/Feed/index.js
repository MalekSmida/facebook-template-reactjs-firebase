import React from "react";
import "./index.scss";
import StoryReel from "./StoryReel";
import AddPost from "./AddPost";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <AddPost />
    </div>
  );
}

export default Feed;
