import { Logout as LogoutDumb } from './logout.dumb';
import { connect } from 'react-redux';

const mapDispatchToProps = () => {
  return {}
}

const mapStateToProps = () => ({});

export const Logout = connect(mapStateToProps, mapDispatchToProps)(LogoutDumb);
