import React, { useState } from "react";

// node modules
import Avatar from "@material-ui/core/Avatar";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import firebase from "firebase";

// local files
import "./index.scss";
import { useStateValue } from "../../context/StateProvider";
import db from "../../services/firebase";

/**
 * create new Post in Feed
 */
function AddPost() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleClick = (e) => {
    e.preventDefault();

    // add new collection to firestore
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="addPost">
      <div className="addPost__input">
        <Avatar
          className="addPost__input__avatar"
          alt={user.displayName}
          src={user.photoURL}
        />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="addPost__input__post"
            type="text"
            placeholder={`What's on your mind?`}
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
