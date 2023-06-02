import styled from 'styled-components';

import AppCard from '../components/AppCard';

import programmingPortfolio from '../utils/programmingPortfolio';

const ProgrammingContainer = styled.div`
  width: 73%;
  height: 70vh;
  font-size: 1.2rem;
  border: 1px solid lime;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  text-align: center;
  padding: 20px;
`;

const Programming = () => {
  return (
    <ProgrammingContainer>
      {programmingPortfolio.map((app) => (
        <AppCard key={app.name} name={app.name} repo={app.repo} demo={app.demo} description={app.description} />
      ))}
    </ProgrammingContainer>
  );
};

export default Programming;
