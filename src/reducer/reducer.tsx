import actions from './actions';
import { IState, IActionPayload } from '../interfaces/interfaces';

const {
  FETCH_LOADING,
  FETCH_ERROR,
  FETCH_SUCCESS,
} = actions;

function reducer(
  state: IState, action: IActionPayload,
): IState {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: '',
      };
    case FETCH_ERROR:
      return {
        ...state,
        isLoading: true,
        isError: true,
        errorMessage: action.payload,
      };
    case FETCH_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        errorMessage: '',
        data: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
