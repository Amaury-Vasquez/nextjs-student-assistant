import { createContext } from 'react';

import { ContextValues } from 'interfaces';

const AppContext = createContext<ContextValues>({
  isAuth: false,
  loading: true,
  setAuth: () => {},
  setLoading: () => {},
});

export { AppContext };
