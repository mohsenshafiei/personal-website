import { Post as PostDumb } from './post.dumb';
import { connect } from 'react-redux';
import { State } from 'store/.';
import { Dispatch } from 'redux';
import { startBlog } from 'store/blog/action';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    startBlog: () => { dispatch(startBlog()) },
  }
}

const mapStateToProps = (state: State) => ({
  post: state.blog.post,
});

export const Post = connect(mapStateToProps, mapDispatchToProps)(PostDumb);
