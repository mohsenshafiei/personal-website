import * as React from 'react';
import * as style from './style.scss';
import { Markdown } from 'ui/components/markdown';
import { BiographyInterface } from 'store/biography/model';

interface StoryProps {
  post: BiographyInterface;
  startBiography: () => {};
}

interface StoryState {
}

export class Story extends React.Component<StoryProps, StoryState> {
  constructor(props: StoryProps) {
    super(props);
  }

  readonly state: StoryState = {
  }

  componentDidMount() {
    this.props.startBiography();
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
