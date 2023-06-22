import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  position: absolute;
  left: 65%;

  @media only screen and (max-width: 1400px) {
    flex-direction: column;
    left: 75%;
  }
  @media only screen and (max-width: 944px) {
    left: 80%;
  }

  @media only screen and (max-width: 850px) {
    right: 0;
  }
`;

const NavButton = styled.button`
  background-color: #58bf16;
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 20px 20px;
  border: 0;

  @media only screen and (max-width: 1400px) {
    width: 170px;
  }

  @media only screen and (max-width: 944px) {
    width: 120px;
    padding: 10px 10px;
  }
`;

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <NavButtonsContainer>
      <NavButton onClick={() => navigate('/music')}>Music</NavButton>
      <NavButton onClick={() => navigate('/programming')}>Programming</NavButton>
      <NavButton onClick={() => navigate('/contact')}>Contact</NavButton>
    </NavButtonsContainer>
  );
};

export default Navigation;
