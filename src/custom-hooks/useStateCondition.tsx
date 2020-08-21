import React from 'react';

import Preloader from '../components/preloader/Preloader';
import { IState } from '../interfaces/interfaces';
import { DefaultErrorBlock } from '../components/errors/Errors';

const useStateCondition = (
  state: IState, finalElement: any,
  preloader: any = <Preloader />,
  errorBlock: any = <DefaultErrorBlock />,
): IState => {
  let data = null;

  if (state.isLoading) {
    data = preloader;
  } else if (state.isError) {
    data = errorBlock;
  } else {
    data = finalElement;
  }

  return data;
};

export default useStateCondition;
