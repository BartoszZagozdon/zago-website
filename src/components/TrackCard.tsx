import styled from 'styled-components';

import TrackType from '../Types/TrackType';

const TrackCardContainer = styled.div`
  width: 250px;
  height: 270px;
  border: 1px solid violet;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
`;

const Art = styled.img`
  width: 200px;
  height: 200px;
`;

const Title = styled.h2`
  color: #0de1cd;
  font-size: 1.2rem;
`;

const TrackCard: React.FC<TrackType> = ({ title, img }) => {
  return (
    <TrackCardContainer>
      <Art src={img} />
      <Title>{title}</Title>
    </TrackCardContainer>
  );
};

export default TrackCard;
