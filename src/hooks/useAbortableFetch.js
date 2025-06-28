import { useEffect } from 'react';

export const useAbortableFetch = (url, onData, onError) => {
  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then(onData)
      .catch((err) => {
        if (err.name !== 'AbortError') onError?.(err);
      });
    return () => controller.abort();
  }, [url]);
};