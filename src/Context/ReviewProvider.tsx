import { ReactNode, createContext, useState } from 'react';

import ReviewContextType from '../Types/ReviewContextType';

export const ReviewContext = createContext<ReviewContextType>({ stars: 0, setStars: () => {} });

export const ReviewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stars, setStars] = useState(0);

  return <ReviewContext.Provider value={{ stars, setStars }}>{children}</ReviewContext.Provider>;
};
