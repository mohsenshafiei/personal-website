import * as React from 'react';
import * as style from './style.scss';

interface Props {
  title: string;
  content: string;
  author: string;
  time: string;
}

export const Markdown: React.FunctionComponent<Props> = props => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>{props.title}</h1>
      <h4 className={style.info}>{props.time}</h4>
      <p className={style.content}>{props.content}</p>
    </div>
  );
};
