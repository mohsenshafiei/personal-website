import * as React from 'react';
import * as style from './style.scss';

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
      </div>
    );
  }
}
