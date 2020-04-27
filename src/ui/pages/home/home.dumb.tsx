import * as React from 'react';
import * as style from './style.scss';
const cv = require('assets/cv/cv.pdf');
const avatar = require('assets/images/avatar.jpeg');

export const Home: React.SFC<> = () => {
    return (
      <div className={style.container}>
        <div className={style.wrapper}>
          <img className={style.avatar} src={avatar} alt="avatar"/>
          <h1 className={style.title}>Mohsen Shafiei Tafreshi</h1>
          <h1 className={style.role}>Frontend Engineer</h1>
          <div className={style.wlink}>
            <a className={style.link} href={cv} target="_blank">CV</a>
            <a className={style.link} href="https://github.com/mohsenshafiei" target="blank">Github</a>
            <a className={style.link} href="https://twitter.com/_mosen_" target="blank">Twitter</a>
            <a className={style.link} href="https://www.linkedin.com/in/mohsen-shafiei-tafreshi-7250847b/" target="blank">LinkedIn</a>
            <a className={style.link} href="https://link.medium.com/9hllirSDHX" target="blank">Medium</a>
          </div>
        </div>
      </div>
    );
}
