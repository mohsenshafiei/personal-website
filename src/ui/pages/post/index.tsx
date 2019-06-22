import { Post as PostDumb } from './post.dumb';
import { connect } from 'react-redux';
import { State } from 'store/.';

const mapDispatchToProps = () => {
  return {}
}

const mapStateToProps = (state: State) => ({
  post: state.blog.post,
});

export const Post = connect(mapStateToProps, mapDispatchToProps)(PostDumb);
