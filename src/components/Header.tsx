import styled, { keyframes } from 'styled-components';
import { TypeAnimation } from 'react-type-animation';

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
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-inline: 90px;
`;

const Location = styled.h1`
  font-size: 3rem;
  white-space: nowrap;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  animation: ${glowAnimation} 2s infinite;
`;

const HeaderComponent: React.FC<{ msg: string }> = ({ msg }) => {
  const navigate = useNavigate();

  return (
    <Header>
      <Logo src={logo} onClick={() => navigate('/')} />
      <Location>
        <TypeAnimation key={msg} sequence={[msg]} cursor color="#FFFFFF" />
      </Location>
      <Navigation />
    </Header>
  );
};

export default HeaderComponent;
