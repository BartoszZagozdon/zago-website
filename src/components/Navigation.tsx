import styled from 'styled-components';

const NavButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const NavButton = styled.button`
  background-color: green;
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 20px 20px;
  border: 0;
`;

const Navigation = () => {
  return (
    <NavButtonsContainer>
      <NavButton>Music</NavButton>
      <NavButton>Programming</NavButton>
      <NavButton>Contact</NavButton>
    </NavButtonsContainer>
  );
};

export default Navigation;
