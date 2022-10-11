import type { AppProps } from 'next/app';

import '../styles/globals.css';
import { AppContext } from 'context';
import { useAppState } from 'hooks/useAppState';
import { ProtectedRoute } from 'components/protectedRoute';

function MyApp({ Component, pageProps }: AppProps) {
  const state = useAppState();

  return (
    <AppContext.Provider value={state}>
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
    </AppContext.Provider>
  );
}

export default MyApp;
