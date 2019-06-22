import * as React from 'react';
import * as style from './style.scss';
import { BlogPost } from 'ui/components/blog-post';
// @ts-ignore-next-line
import { posts } from 'blog-posts';

interface BlogProps {
  selectPost: (post: any) => {};
}

interface BlogState {
}

export class Blog extends React.Component<BlogProps, BlogState> {
  constructor(props: BlogProps) {
    super(props);
  }

  readonly state: BlogState = {
  }

  render() {
    return (
      <div className={style.container}>
        <h1 className={style.title}>PERSONAL BLOG</h1>
        {
          posts.map((post: any, index: any) => {
            return(
              <div onClick={() => this.props.selectPost(post)} key={index}>
                <BlogPost
                  link={''}
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
