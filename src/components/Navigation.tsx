import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const NavButton = styled.button`
  background-color: #58bf16;
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 20px 20px;
  border: 0;
`;

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <NavButtonsContainer>
      <NavButton onClick={() => navigate('/music')}>Music</NavButton>
      <NavButton onClick={() => navigate('/programming')}>Programming</NavButton>
      <NavButton>Contact</NavButton>
    </NavButtonsContainer>
  );
};

export default Navigation;
