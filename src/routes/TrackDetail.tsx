import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import musicPortfolio from '../utils/musicPortfolio';

import AudioPlayer from '../components/AudioPlayer';

const TrackDetailContainer = styled.div`
  width: 73%;
  height: 70vh;
  font-size: 1.2rem;
  border: 1px solid lime;
  margin-top: 30px;
  display: flex;
  justify-content: start;
  gap: 10px;
  text-align: center;
  padding: 20px;
`;

const ArtBig = styled.img`
  width: 300px;
  height: 300px;
`;

const TitlePlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 50px;
`;

const TrackDetail = () => {
  let { title } = useParams();

  if (title === 'u ok') {
    title += '?';
  }

  const trackIndex = musicPortfolio.findIndex((track) => track.title === title);

  console.log(title);

  return (
    <TrackDetailContainer>
      <ArtBig src={musicPortfolio[trackIndex].img} />
      <TitlePlayerWrapper>
        <Title>{musicPortfolio[trackIndex].title}</Title>
        <AudioPlayer />
      </TitlePlayerWrapper>
    </TrackDetailContainer>
  );
};

export default TrackDetail;
