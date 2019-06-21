import { Login as LoginDumb } from './login.dumb';
import { connect } from 'react-redux';

const mapDispatchToProps = () => {
  return {}
}

const mapStateToProps = () => ({});

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginDumb);
