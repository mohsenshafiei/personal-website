import * as React from 'react';
import * as style from './style.scss';
import { BlogPost } from 'ui/components/blog-post';

interface BlogProps {}

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
        <BlogPost
          link={'introduction'}
          title={'- Why functional programming is so important?'}
          description={'19 minutes reading'}
          date={'24 June 2019'}
        />
        <BlogPost
          link={'ES6, ES7, ES9 New Features'}
          title={'- ES6, ES7, ES9 new features'}
          description={'12 minutes reading'}
          date={'24 June 2019'}
        />
        <BlogPost
          link={'introduction'}
          title={'- Functors & Monads'}
          description={'3 minutes reading'}
          date={'24 June 2019'}
        />
        <BlogPost
          link={'introduction'}
          title={'- Category Theory in JavaScript'}
          description={'3 minutes reading'}
          date={'24 June 2019'}
        />
        <BlogPost
          link={'introduction'}
          title={'- Transducing'}
          description={'25 minutes reading'}
          date={'24 June 2019'}
        />
        <BlogPost
          link={'introduction'}
          title={'- WTF is "this" in JS '}
          description={'9 minutes reading'}
          date={'24 June 2019'}
        />
        <BlogPost
          link={'introduction'}
          title={'- Map, Reduce, Filter & Some in JS'}
          description={'13 minutes reading'}
          date={'24 June 2019'}
        />
        <BlogPost
          link={'introduction'}
          title={'- How learning algorithms and data structures helps us to be a better programmer?'}
          description={'5 minutes reading'}
          date={'24 June 2019'}
        />
        <BlogPost
          link={'introduction'}
          title={'- Composition VS Pipe'}
          description={'5 minutes reading'}
          date={'24 June 2019'}
        />
      </div>
    );
  }
}
