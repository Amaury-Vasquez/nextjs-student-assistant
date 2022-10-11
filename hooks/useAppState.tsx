import { useEffect, useState } from 'react';

export const useAppState = () => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setAuth] = useState(() => {
    if (typeof window !== 'undefined') {
      const auth =
        localStorage.getItem('auth') || sessionStorage.getItem('auth');
      if (auth) {
        setLoading(false);
        return JSON.parse(auth);
      }
    }
    setLoading(false);
    return false;
  });

  useEffect(() => {}, [isAuth]);

  return { isAuth, loading, setAuth, setLoading };
};
