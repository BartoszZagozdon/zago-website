import { ReactNode, createContext, useState } from 'react';

import WelcomeMsgContextType from '../Types/WelcomeMsg/WelcomeMsgContextType';

export const WelcomeMsgContext = createContext<WelcomeMsgContextType>({});

export const WelcomeMsgProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [msg, setMsg] = useState('Hello! My name is Zago ;)');

  return <WelcomeMsgContext.Provider value={{ msg, setMsg }}>{children}</WelcomeMsgContext.Provider>;
};
