import React from "react";

// local files
import "./index.scss";

/**
 * facebook widget iframe
 */
function Widgets() {
  return (
    <div className="widgets">
      <iframe
        title="FacebookIframe"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FfacebookappAfrica%2F%3Fbrand_redir%3D20531316728&tabs=timeline&width=300&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="300"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
