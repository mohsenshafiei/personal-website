import * as React from 'react';
import * as style from './style.scss';
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.wlink}>
        <NavLink className={style.link} to="/">HOME</NavLink>
        <NavLink className={style.link} to="/blog">BLOG</NavLink>
        <NavLink className={style.link} to="/biography">BIOGRAPHY</NavLink>
      </div>
    </div>
  );
};
