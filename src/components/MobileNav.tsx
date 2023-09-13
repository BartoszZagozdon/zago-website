import styled from 'styled-components';

import { NavButton } from './Navigation';
import { useNavigate } from 'react-router-dom';

const MobileNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 50vw;
  height: 50vh;
  position: absolute;
  top: 100%;
  left: 25%;
  background: black;
  border: 3px solid white;
  z-index: 10;
`;

const MobileNav: React.FC<{ setShowMobile: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setShowMobile }) => {
  const navigate = useNavigate();

  const navClick = (route: string) => {
    navigate(route);
    setShowMobile(false);
  };

  return (
    <MobileNavContainer>
      <NavButton onClick={() => navClick('/')}>Home</NavButton>
      <NavButton onClick={() => navClick('/music')}>Music</NavButton>
      <NavButton onClick={() => navClick('/programming')}>Programming</NavButton>
      <NavButton onClick={() => navClick('/contact')}>Contact</NavButton>
    </MobileNavContainer>
  );
};

export default MobileNav;
