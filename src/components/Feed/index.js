import React, { useState, useEffect } from "react";

// node modules
import FlipMove from "react-flip-move";

// local files
import "./index.scss";
import { StoryReel, AddPost, Post } from "../";
import { useStateValue } from "../../context/StateProvider";
import db from "../../services/firebase";

/**
 * Feed component that displays Posts
 */
function Feed() {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  // fetch posts from firestore when render the component
  useEffect(() => {
    let ignore = false;
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        !ignore &&
          setPosts(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <AddPost />
      <FlipMove className="feed__flip">
        {posts.map((post, index) => (
          <Post
            key={index} //post.data.id
            username={post.data.username}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            image={post.data.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
