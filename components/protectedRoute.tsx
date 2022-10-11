import { AppContext } from 'context';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { FallbackScreen } from './fallback';

export const ProtectedRoute = ({ children }: any) => {
  const router = useRouter();
  const { isAuth, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    if (router.pathname === '/auth' && isAuth) router.push('/');
    else if (router.pathname !== '/auth' && !isAuth) router.push('/auth');
  }, [isAuth, router]);

  if (loading && !isAuth && router.pathname !== '/auth')
    return <FallbackScreen />;

  return children;
};
