import styled, { keyframes } from 'styled-components';
import { TypeAnimation } from 'react-type-animation';

import logo from '../assets/logo.png';

import Navigation from '../components/Navigation';
import MobileNav from './MobileNav';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
  position: relative;

  @media only screen and (max-width: 615px) {
    justify-content: center;
  }
`;

const Location = styled.h1`
  font-size: 3rem;
  white-space: nowrap;
  position: absolute;
  left: 20%;

  @media only screen and (max-width: 1400px) {
    left: 20%;
  }

  @media only screen and (max-width: 850px) {
    left: 150px;
  }

  @media only screen and (max-width: 615px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  animation: ${glowAnimation} 2s infinite;
  position: absolute;
  left: 10%;

  @media only screen and (max-width: 1400px) {
    left: 5%;
  }
  @media only screen and (max-width: 1000px) {
    left: 2%;
  }
  @media only screen and (max-width: 850px) {
    left: 0;
  }

  @media only screen and (max-width: 615px) {
    display: none;
  }
`;

const LogoMobile = styled.img`
  width: 150px;
  height: 150px;
  animation: ${glowAnimation} 2s infinite;
  display: none;

  @media only screen and (max-width: 615px) {
    display: block;
  }
`;

const HeaderComponent: React.FC<{ msg: string }> = ({ msg }) => {
  const navigate = useNavigate();

  const [showMobile, setShowMobile] = useState(false);

  return (
    <Header>
      <Logo src={logo} onClick={() => navigate('/')} />
      <LogoMobile src={logo} onClick={() => setShowMobile(!showMobile)} />
      {showMobile && <MobileNav setShowMobile={setShowMobile} />}
      <Location>
        <TypeAnimation key={msg} sequence={[msg]} cursor color="#FFFFFF" />
      </Location>
      <Navigation />
    </Header>
  );
};

export default HeaderComponent;
