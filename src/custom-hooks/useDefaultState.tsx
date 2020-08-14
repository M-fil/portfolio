import { useState } from 'react';
import {
  ActionTypesType,
  IDefaultState,
} from '../interfaces/interfaces';


const useDefaultState = () => {
  const [state, setState] = useState<IDefaultState>({
    isLoading: false,
    isError: false,
  });

  return (type: ActionTypesType) => {
    switch (type) {
      case 'loading':
        setState({
          isLoading: true,
          isError: false,
        });
        break;
      case 'error':
        setState({
          isLoading: false,
          isError: true,
        });
        break;
      case 'success':
      default:
        setState({
          isLoading: false,
          isError: false,
        });
        break;
    }

    return state;
  }
};

export default useDefaultState;
