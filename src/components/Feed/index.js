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
      <Post
        message="Hello man!"
        timestamp="is 20oclock"
        image="https://images.unsplash.com/photo-1567522874215-d5e2f1bee83d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
        username="Malek Smida"
        profilePic="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.0-9/83020011_725652291572674_1450846223241052160_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=n2Zeto3D8qkAX-9jz7Q&_nc_ht=scontent.ftun6-1.fna&oh=df464cdbcb44b26d2924642c597b63c8&oe=5F8D5D6B"
      />
      <Post
        message="Hello man!"
        timestamp="is 20oclock"
        image="https://images.unsplash.com/photo-1567522874215-d5e2f1bee83d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
        username="Malek Smida"
        profilePic="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.0-9/83020011_725652291572674_1450846223241052160_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=n2Zeto3D8qkAX-9jz7Q&_nc_ht=scontent.ftun6-1.fna&oh=df464cdbcb44b26d2924642c597b63c8&oe=5F8D5D6B"
      />
      <Post
        message="Hello man!"
        timestamp="is 20oclock"
        image="https://images.unsplash.com/photo-1567522874215-d5e2f1bee83d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
        username="Malek Smida"
        profilePic="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.0-9/83020011_725652291572674_1450846223241052160_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=n2Zeto3D8qkAX-9jz7Q&_nc_ht=scontent.ftun6-1.fna&oh=df464cdbcb44b26d2924642c597b63c8&oe=5F8D5D6B"
      />
    </div>
  );
}

export default Feed;
