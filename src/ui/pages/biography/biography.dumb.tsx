import * as React from 'react';
import * as style from './style.scss';
import { BlogPost } from 'ui/components/blog-post';
// @ts-ignore-next-line
import { biographies } from 'biography-posts';

interface BiographyProps {
  selectPost: (post: any) => {};
}

interface BiographyState {
}

export class Biography extends React.Component<BiographyProps, BiographyState> {
  constructor(props: BiographyProps) {
    super(props);
  }

  readonly state: BiographyState = {
  }

  render() {
    return (
      <div className={style.container}>
        <h1 className={style.title}>BIOGRAPHY</h1>
        {
          biographies.map((post: any, index: any) => {
            return(
              <div onClick={() => this.props.selectPost(post)} key={index}>
                <BlogPost
                  link={'/story'}
                  title={post.title}
                  description={post.description}
                  time={post.time}
                  date={post.date}
                  key={index}
                />
              </div>
            );
          })
        }
      </div>
    );
  }
}
