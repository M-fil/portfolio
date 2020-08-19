import { IState } from '../interfaces/interfaces';

const defaultState: IState = {
  isLoading: false,
  isError: false,
  errorMessage: '',
  data: null,
};

export default defaultState;