import './App.css';

import { Route, Routes } from 'react-router-dom';

import LandingPage from './routes/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/aa" element={<>aaaaaaaaaaaaaaaa</>}></Route>
    </Routes>
  );
}

export default App;
