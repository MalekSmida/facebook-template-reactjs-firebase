import React from "react";

// node modules
import CovidIcon from "@material-ui/icons/FavoriteRounded";
import FlagOutlinedIcon from "@material-ui/icons/FlagRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import ChatIcon from "@material-ui/icons/ChatRounded";
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreRounded";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

// local files
import "./index.scss";
import SidebarRow from "../SidebarRow";
import { useStateValue } from "../../context/StateProvider";

/**
 * displays side bar rows on the left
 */
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow title={user.displayName} src={user.photoURL} />
      <SidebarRow Icon={CovidIcon} title="COVID-19 Information Center" />
      <SidebarRow Icon={FlagOutlinedIcon} title="Pages" />
      <SidebarRow Icon={PeopleAltRoundedIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={VideogameAssetIcon} title="Games" />
      <SidebarRow Icon={BookmarkIcon} title="Saved" />
      <SidebarRow Icon={ExpandMoreIcon} title="See more" />
      <hr />
    </div>
  );
}

export default Sidebar;
