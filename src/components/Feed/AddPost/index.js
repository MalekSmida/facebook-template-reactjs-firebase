import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./index.scss";

function AddPost() {
  return (
    <div className="addPost">
      <div className="addPost__input">
        <Avatar
          className="addPost__input__avatar"
          alt="Malek Smida"
          src="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.0-9/83020011_725652291572674_1450846223241052160_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=n2Zeto3D8qkAX-9jz7Q&_nc_ht=scontent.ftun6-1.fna&oh=df464cdbcb44b26d2924642c597b63c8&oe=5F8D5D6B"
        />
        <input type="text" />
        <input type="text" />
      </div>
      <div className="addPost__media">
        <div className="addPost__media__element">
          <h4>Live Video</h4>
        </div>
        <div className="addPost__media__element">
          <h4>Photo/Video</h4>
        </div>
        <div className="addPost__media__element">
          <h4>Feeling/Avtivity</h4>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
