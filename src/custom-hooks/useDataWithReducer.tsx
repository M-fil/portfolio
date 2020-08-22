import { useEffect, useReducer } from 'react';

import defaultState from '../reducer/defaultState';
import reducer from '../reducer/reducer';
import actions from '../reducer/actions';

const {
  FETCH_LOADING,
  FETCH_ERROR,
  FETCH_SUCCESS,
} = actions;

function useDataWithReducer(getData: () => any, localStorageName: string) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const dataFromLocalStorage = localStorage.getItem(localStorageName);
  const isLocalStorageExists = dataFromLocalStorage && dataFromLocalStorage?.length;

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      try {
        let data = null;
        if (!isLocalStorageExists) {
          dispatch({ type: FETCH_LOADING });
          data = await getData();
          localStorage.setItem(localStorageName, JSON.stringify(data));
        } else {
          data = JSON.parse(dataFromLocalStorage || '');
        }
        if (!didCancel) {
          dispatch({ type: FETCH_SUCCESS, payload: data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: FETCH_ERROR, payload: error.message });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, []);

  return {
    state,
    dispatch,
  };
}

export default useDataWithReducer;
