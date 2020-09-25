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

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.0-9/83020011_725652291572674_1450846223241052160_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=n2Zeto3D8qkAX-9jz7Q&_nc_ht=scontent.ftun6-1.fna&oh=df464cdbcb44b26d2924642c597b63c8&oe=5F8D5D6B"
        title="Malek Smida"
      />
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
