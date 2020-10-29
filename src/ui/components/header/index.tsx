import * as React from "react";
import * as style from "./style.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.wlink}>
        <NavLink className={style.link} to="/">
          HOME
        </NavLink>
        <NavLink className={style.link} to="/frontend">
          FRONTEND
        </NavLink>
        <NavLink className={style.link} to="/backend">
          BACKEND
        </NavLink>
        <NavLink className={style.link} to="/talk">
          TALKS
        </NavLink>
        <NavLink className={style.link} to="/book">
          BOOKS
        </NavLink>
        <NavLink className={style.link} to="/podcast">
          PODCASTS
        </NavLink>
        <NavLink className={style.link} to="/story">
          STORIES
        </NavLink>
        <NavLink className={style.link} to="/story">
          YOUTUBE
        </NavLink>
      </div>
    </div>
  );
};
