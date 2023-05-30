import styled from 'styled-components';

import logo from '../assets/logo.png';

import Navigation from '../components/Navigation';

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
  margin-right: 50px;
`;

const HeaderComponent: React.FC<{ location: string }> = ({ location }) => {
  return (
    <Header>
      <Logo src={logo} />
      <Location>{location}</Location>
      <Navigation />
    </Header>
  );
};

export default HeaderComponent;
