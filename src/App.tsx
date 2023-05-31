import './App.css';

import { useTransition, animated, config } from '@react-spring/web';
import { Route, Routes, useLocation } from 'react-router-dom';

import LandingPage from './routes/LandingPage';
import HeaderComponent from './components/Header';
import Programming from './routes/Programming';
import Music from './routes/Music';

import { WelcomeMsgContext } from './Context/WelcomeMsgProvider';
import { useContext } from 'react';

function App() {
  const { msg } = useContext(WelcomeMsgContext);

  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    config: config.default,
  });

  return (
    <>
      <HeaderComponent msg={msg} />
      {transitions((props: any, item: any) => (
        <animated.div
          style={{
            ...props,
            position: 'absolute',
            top: '175px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Routes location={item}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/programming" element={<Programming />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </animated.div>
      ))}
    </>
  );
}

export default App;
