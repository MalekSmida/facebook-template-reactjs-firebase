import React from "react";
import "./index.scss";
import HomeIcon from "@material-ui/icons/HomeRounded";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideoRounded";
import PeopleIcon from "@material-ui/icons/PeopleRounded";
import WebIcon from "@material-ui/icons/WebRounded";
import AddIcon from "@material-ui/icons/AddRounded";
import ChatIcon from "@material-ui/icons/ChatRounded";
import NotificationsIcon from "@material-ui/icons/NotificationsRounded";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDownRounded";
import SearchIcon from "@material-ui/icons/SearchRounded";
import { Avatar, IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          alt="facebook"
        />
        <div className="header__left__search">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__center__option header__center__option--selected">
          <HomeIcon />
        </div>
        <div className="header__center__option">
          <OndemandVideoIcon />
        </div>
        <div className="header__center__option">
          <PeopleIcon />
        </div>
        <div className="header__center__option">
          <WebIcon />
        </div>
      </div>
      <div className="header__right">
        <div className="header__right__info">
          <Avatar
            className="header__right__info__avatar"
            alt="Malek Smida"
            src="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.0-9/83020011_725652291572674_1450846223241052160_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=n2Zeto3D8qkAX-9jz7Q&_nc_ht=scontent.ftun6-1.fna&oh=df464cdbcb44b26d2924642c597b63c8&oe=5F8D5D6B"
          />
          <h4>Malek</h4>
        </div>
        <IconButton className="header__right__box">
          <AddIcon />
        </IconButton>
        <IconButton className="header__right__box header__right__box__chat">
          <ChatIcon />
        </IconButton>
        <IconButton className="header__right__box header__right__box__notification">
          <NotificationsIcon />
        </IconButton>
        <IconButton className="header__right__box header__right__box__arrow">
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
