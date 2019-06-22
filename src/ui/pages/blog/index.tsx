import { Blog as BlogDumb } from './blog.dumb';
import { connect } from 'react-redux';
import { selectPostAction } from 'store/blog/action';
import { PostInterface } from 'store/blog/model';
import { Dispatch } from 'redux';
import { State } from 'store/.';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    selectPost: (post: PostInterface) => { dispatch(selectPostAction(post)) },
  }
}

const mapStateToProps = (state: State) => ({
  post: state.blog.post,
});

export const Blog = connect(mapStateToProps, mapDispatchToProps)(BlogDumb);
