import { Biography as BiographyDumb } from './biography.dumb';
import { connect } from 'react-redux';

const mapDispatchToProps = () => {
  return {}
}

const mapStateToProps = () => ({});

export const Biography = connect(mapStateToProps, mapDispatchToProps)(BiographyDumb);
