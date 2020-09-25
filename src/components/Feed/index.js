import React, { useState, useEffect } from "react";
import "./index.scss";
import StoryReel from "../StoryReel";
import AddPost from "../AddPost";
import Post from "../Post";
import { useStateValue } from "../../context/StateProvider";
import db from "../../firebase";

function Feed() {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <AddPost />
      {posts.map((post) => (
        <Post
          key={post.data.id}
          username={post.data.username}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
