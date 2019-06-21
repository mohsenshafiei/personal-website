import { Blog as BlogDumb } from './blog.dumb';
import { connect } from 'react-redux';

const mapDispatchToProps = () => {
  return {}
}

const mapStateToProps = () => ({});

export const Blog = connect(mapStateToProps, mapDispatchToProps)(BlogDumb);
