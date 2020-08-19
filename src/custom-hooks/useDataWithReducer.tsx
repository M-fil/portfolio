import {
  useEffect, useReducer,
} from 'react';

import defaultState from '../reducer/defaultState';
import reducer from '../reducer/reducer';
import actions from '../reducer/actions';

const {
  FETCH_LOADING,
  FETCH_ERROR,
  FETCH_SUCCESS,
} = actions;

function useDataWithReducer(getData: () => any) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      try {
        dispatch({ type: FETCH_LOADING });
        const data = await getData();
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
};

export default useDataWithReducer;
