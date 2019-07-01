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
          const paragraphTrimmed = paragraph.trim();
          switch (paragraphTrimmed.substr(0, paragraphTrimmed.indexOf(" "))) {
            case '#': {
              return (<h1 className={style.header1} key={index}>{paragraphTrimmed.substr(paragraphTrimmed.indexOf(" ") + 1)}</h1>);
            }
            case '##': {
              return (<h2 className={style.header2} key={index}>{paragraphTrimmed.substr(paragraphTrimmed.indexOf(" ") + 1)}</h2>);
            }
            case '-': {
              return (<li className={style.list} key={index}>{paragraphTrimmed.substr(paragraphTrimmed.indexOf(" ") + 1)}</li>);
            }
            case '*': {
              return (<li className={style.list} key={index}>{paragraphTrimmed.substr(paragraphTrimmed.indexOf(" ") + 1)}</li>);
            }
            case 'td': {
              const tableData = paragraphTrimmed.substr(paragraphTrimmed.indexOf(" ") + 1).split(' * ');
              return (
                <div className={style.tbrow}>
                  {
                    tableData.map(( data : string, index: number ) => {
                      return (<span className={style.tdata} key={index} style={{width: `${100/tableData.length}%`}}>{data}</span>);
                    })
                  }
                </div>
              );
            }
            case 'tr': {
              const tableData = paragraphTrimmed.substr(paragraphTrimmed.indexOf(" ") + 1).split(' * ');
              return (
                <div className={style.tbrow}>
                  {
                    tableData.map(( data : string, index: number ) => {
                      return (<span className={style.trow} key={index} style={{width: `${100/tableData.length}%`}}>{data}</span>);
                    })
                  }
                </div>
              );
            }
            case 'th': {
              const tableData = paragraphTrimmed.substr(paragraphTrimmed.indexOf(" ") + 1).split(' * ');
              return (
                <div className={style.tbrow}>
                  {
                    tableData.map(( data : string, index: number ) => {
                      return (<span className={style.thead} key={index} style={{width: `${100/tableData.length}%`}}>{data}</span>);
                    })
                  }
                </div>
              );
            }
            default: {
              return (<p className={style.paragraph} key={index}>{paragraph}</p>);
            }
          }
        })
      }
    </div>
  );
};
