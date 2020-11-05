import React from "react";
import "./index.scss";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png"
          alt="f"
        />
        <h1>
          Facebook helps you connect and share with the people in your life.
        </h1>
        <h4>Login with your google account</h4>
        <Button type="submit" onClick={signIn}>
          Log In
        </Button>
      </div>
    </div>
  );
}

export default Login;
