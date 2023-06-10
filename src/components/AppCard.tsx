import styled from 'styled-components';

import AppType from '../Types/AppType';

const AppCardStyled = styled.div`
  width: 25%;
  height: 40%;
  border: 2px solid violet;
  border-radius: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
`;

const AppName = styled.h2`
  color: #0de1cd;
  font-size: 2.5rem;
`;

const AppDescription = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: auto;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: auto;
`;

const Link = styled.a`
  text-decoration: none;
  border: 2px solid #58bf16;
  padding: 5px;
  border-radius: 10px 10px;
  width: 130px;
  text-align: center;
`;

const AppCard: React.FC<AppType> = ({ repo, demo, name, description }) => {
  return (
    <AppCardStyled>
      <AppName>{name}</AppName>
      <AppDescription>{description}</AppDescription>
      <LinksContainer>
        <Link href={repo}>GitHub</Link>
        <Link href={demo}>Live Demo</Link>
      </LinksContainer>
    </AppCardStyled>
  );
};

export default AppCard;
