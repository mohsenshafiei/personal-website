import * as React from 'react';
import * as style from './style.scss';
import { Markdown } from 'ui/components/markdown';
import { PostInterface } from 'store/blog/model';
interface PostProps {
  post: PostInterface;
}

interface PostState {
}

export class Post extends React.Component<PostProps, PostState> {
  constructor(props: PostProps) {
    super(props);
  }

  readonly state: PostState = {
  }

  render() {
    return (
      <div className={style.container}>
        <Markdown
          content={this.props.post.content}
          title={this.props.post.title}
          author={this.props.post.author}
          time={this.props.post.time}
        />
      </div>
    );
  }
}
