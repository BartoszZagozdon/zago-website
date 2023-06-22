import { ReactNode, createContext, useState } from 'react';

import WelcomeMsgContextType from '../Types/WelcomeMsg/WelcomeMsgContextType';

export const WelcomeMsgContext = createContext<WelcomeMsgContextType>({
  msg: 'Hi! My name is Zago ;)',
  setMsg: () => {},
});

export const WelcomeMsgProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [msg, setMsg] = useState("Hi! I'm Bartek ;)");

  return <WelcomeMsgContext.Provider value={{ msg, setMsg }}>{children}</WelcomeMsgContext.Provider>;
};
