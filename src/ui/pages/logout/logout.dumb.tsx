import * as React from 'react';
import * as style from './style.scss';

interface LogoutProps {}

interface LogoutState {
  canSubmit: boolean;
}

export class Logout extends React.Component<LogoutProps, LogoutState> {
  constructor(props: LogoutProps) {
    super(props);
  }

  readonly state: LogoutState = {
    canSubmit: false,
  }

  render() {
    return (<h1 className={style.title}>{this.state.canSubmit}</h1>);
  }
}
