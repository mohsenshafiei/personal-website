import * as React from 'react';
import * as style from './style.scss';

interface Props {
  title: string;
  content: string[];
  author: string;
  time: string;
  date: string;
}

export const Markdown: React.FunctionComponent<Props> = props => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>{props.title}</h1>
      <h4 className={style.info}>{props.time} | {props.date}</h4>
      {
        props.content.map((paragraph: string, index: number) => {
          return (<p className={style.content} key={index}>{paragraph}</p>);
        })
      }
    </div>
  );
};
