import { useEffect, useState } from 'react';
import useDefaultState from '../custom-hooks/useDefaultState';

const useCallbackEffect = (
  defaultState: any,
  asyncCallback: (...args: any[]) => any,
  asyncCallbackArgs?: any[],
) => {
  const [data, setData] = useState(defaultState);
  const dispatchAction = useDefaultState();

  useEffect(() => {
    let didCancel = false;
  
    const fetchData = async () => {
      try {
        dispatchAction('loading');
        const data = await asyncCallback.apply(null, asyncCallbackArgs || [])
        if (!didCancel) {
          setData(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
    return () => {
      didCancel = true;
    }
  }, []);

  return data;
}

export default useCallbackEffect;

