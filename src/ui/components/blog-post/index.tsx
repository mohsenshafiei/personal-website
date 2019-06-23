import * as React from 'react';
import * as style from './style.scss';
import { NavLink } from "react-router-dom";

interface Props {
  link: string;
  title: string;
  description: string;
  date: string;
  time: string;
}

export const BlogPost: React.FunctionComponent<Props> = props => {
  return (
    <div className={style.wrapper}>
      <NavLink to={props.link} className={style.link}>{props.title}</NavLink>
      <p className={style.description}>{props.description}</p>
      <p className={style.info}>{props.date} | {props.time}</p>
    </div>
  );
};
