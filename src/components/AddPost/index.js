import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./index.scss";

function AddPost() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    // db stuff
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="addPost">
      <div className="addPost__input">
        <Avatar
          className="addPost__input__avatar"
          alt="Malek Smida"
          src="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.0-9/83020011_725652291572674_1450846223241052160_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=n2Zeto3D8qkAX-9jz7Q&_nc_ht=scontent.ftun6-1.fna&oh=df464cdbcb44b26d2924642c597b63c8&oe=5F8D5D6B"
        />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="addPost__input__post"
            type="text"
            placeholder="What's on your mind?"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="Image URL (Optional)"
          />
          <button onClick={handleClick}>Hidden submit</button>
        </form>
      </div>
      <div className="addPost__media">
        <div className="addPost__media__element">
          <VideocamIcon style={{ color: "#F02849" }} />
          <h4>Live video</h4>
        </div>
        <div className="addPost__media__element">
          <PhotoLibraryIcon style={{ color: "#45BD62" }} />
          <h4>Photo/Video</h4>
        </div>
        <div className="addPost__media__element">
          <InsertEmoticonIcon style={{ color: "#F7B928" }} />
          <h4>Feeling/Avtivity</h4>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
