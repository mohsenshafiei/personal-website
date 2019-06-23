import { Biography as BiographyDumb } from './biography.dumb';
import { connect } from 'react-redux';
import { selectBiographyAction } from 'store/biography/action';
import { BiographyInterface } from 'store/biography/model';
import { Dispatch } from 'redux';
import { State } from 'store/.';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    selectPost: (post: BiographyInterface) => { dispatch(selectBiographyAction(post)) },
  }
}

const mapStateToProps = (state: State) => ({
  post: state.biography.post,
});

export const Biography = connect(mapStateToProps, mapDispatchToProps)(BiographyDumb);
