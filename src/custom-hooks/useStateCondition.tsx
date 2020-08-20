import React from 'react';

import Preloader from '../components/preloader/Preloader';
import { IState } from '../interfaces/interfaces';

const useStateCondition = (
  state: IState, finalElement: any, preloader: any = <Preloader />,
): IState => {
  let data = null;

  if (state.isLoading) {
    data = preloader;
  } else if (state.isError) {
    data = state.errorMessage;
  } else {
    data = finalElement;
  }

  return data;
};

export default useStateCondition;
