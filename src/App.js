import React from "react";

// local files
import "./App.scss";
import { Login, Main } from "./pages";
import { useStateValue } from "./context/StateProvider";

/**
 * App component that render Login page, after successful login redirect user to main page
 */
function App() {
  const [{ user }, dispatch] = useStateValue();
  return <div className="app">{!user ? <Login /> : <Main />}</div>;
}

export default App;
