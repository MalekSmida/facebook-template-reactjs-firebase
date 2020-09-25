import React from "react";
import "./index.scss";
import SidebarRow from "../SidebarRow";
import CovidIcon from "@material-ui/icons/FavoriteRounded";
import FlagOutlinedIcon from "@material-ui/icons/FlagRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import ChatIcon from "@material-ui/icons/ChatRounded";
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreRounded";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import { useStateValue } from "../../context/StateProvider";

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
