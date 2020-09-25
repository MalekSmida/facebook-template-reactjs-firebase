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

      {/* <Post
        username={user.displayName}
        profilePic={user.photoURL}
        message="Good morning!"
        timestamp="is 20oclock"
        image="https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"
      />
      <Post
        username={user.displayName}
        profilePic={user.photoURL}
        message="Good morning!"
        timestamp="is 20oclock"
        image="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      /> */}
    </div>
  );
}

export default Feed;
