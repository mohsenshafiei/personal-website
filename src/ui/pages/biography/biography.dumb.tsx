import * as React from 'react';
import * as style from './style.scss';
import { BlogPost } from 'ui/components/blog-post';

interface BiographyProps {}

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
        <BlogPost
          link={'introduction'}
          title={'- Snapp Frontend Team'}
          description={'19 minutes reading'}
          date={'24 June 2019'}
        />
        <BlogPost
          link={'introduction'}
          title={'- How I chose that to become a frontend developer'}
          description={'5 minutes reading'}
          date={'24 June 2019'}
        />
        <BlogPost
          link={'introduction'}
          title={'- When I was younger'}
          description={'5 minutes reading'}
          date={'24 June 2019'}
        />
      </div>
    );
  }
}
