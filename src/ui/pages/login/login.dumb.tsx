import * as React from 'react';
import * as style from './style.scss';

interface LoginProps {}

interface LoginState {
  canSubmit: boolean;
}

export class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
  }

  readonly state: LoginState = {
    canSubmit: false,
  }

  render() {
    return (<h1 className={style.title}>{this.state.canSubmit}mohsen</h1>);
  }
}
