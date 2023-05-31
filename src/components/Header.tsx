import styled, { keyframes } from 'styled-components';

import logo from '../assets/logo.png';

import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';

const glowAnimation = keyframes`
  0% {
    filter: drop-shadow(0 0 0 rgba(152,238,149, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 18px rgba(152,238,149, 1));
  }
  100% {
    filter: drop-shadow(0 0 0 rgba(152,238,149, 0.5));
  }
`;

const Header = styled.header`
  width: 100%;
  min-height: 200px;
  border: 0px solid lime;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 30px;
`;

const Location = styled.h1`
  font-size: 3rem;
  margin-right: 13%;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 40px;
  animation: ${glowAnimation} 2s infinite;
`;

const HeaderComponent: React.FC<{ msg: string | undefined }> = ({ msg }) => {
  const navigate = useNavigate();

  return (
    <Header>
      <Logo src={logo} onClick={() => navigate('/')} />
      <Location>{msg}</Location>
      <Navigation />
    </Header>
  );
};

export default HeaderComponent;
