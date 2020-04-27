import * as React from 'react';
import * as style from './style.scss';
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.wlink}>
        <NavLink className={style.link} to="/">HOME</NavLink>
      </div>
    </div>
  );
};
