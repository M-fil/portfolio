import { useEffect, useState } from 'react';

const useCallbackEffect = (
  defaultState: any,
  asyncCallback: (...args: any[]) => any,
  asyncCallbackArgs?: any[],
) => {
  const [data, setData] = useState(defaultState);

  useEffect(() => {
    let didCancel = false;
  
    const fetchData = async () => {
      try {
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

