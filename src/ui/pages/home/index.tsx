import * as React from "react";
import * as style from "./style.scss";
const cv = require("assets/cv/cv.pdf");
const avatar = require("assets/images/profile.png");
import { Maze } from "ui/components/maze";

export const Home: React.SFC<> = () => {
  return (
    <div className={style.container}>
      <Maze />
      <div className={style.wrapper}>
        <div className={style.circleWarpper}>
          <div className={style.circle} />
          <img className={style.avatar} src={avatar} alt="avatar" />
        </div>
        <h1 className={style.title}>MOHSEN SHAFIEI</h1>
        <h1 className={style.role}>Frontend Engineer</h1>
        <div className={style.wlink}>
          <a className={style.link} href={cv} target="_blank">
            CV
          </a>
          <a
            className={style.link}
            href="https://github.com/mohsenshafiei"
            target="blank"
          >
            Github
          </a>
          <a
            className={style.link}
            href="https://www.linkedin.com/in/mohsen-shafiei-tafreshi-7250847b/"
            target="blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};
