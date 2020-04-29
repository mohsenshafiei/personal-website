import * as React from 'react';
import * as style from './style.scss';
import { NavLink } from 'react-router-dom';

const NotFound: React.SFC<> = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Not Found</h1>
        <p className={style.info}>I can't seem to find the page you are looking for.</p>
        <NavLink to="/" className={style.link}>Back to home</NavLink>
      </div>
    </div>
  );
}

export default NotFound;
