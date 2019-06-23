import { Story as StoryDumb } from './story.dumb';
import { connect } from 'react-redux';
import { State } from 'store/.';
import { Dispatch } from 'redux';
import { startBiography } from 'store/biography/action';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    startBiography: () => { dispatch(startBiography()) },
  }
}

const mapStateToProps = (state: State) => ({
  post: state.biography.post,
});

export const Story = connect(mapStateToProps, mapDispatchToProps)(StoryDumb);
