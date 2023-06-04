import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import musicPortfolio from '../utils/musicPortfolio';

import AudioPlayer from '../components/AudioPlayer';
import StarsFeedback from '../components/StarsFeedback';
import Stars from '../components/Stars';

import WriteComment from '../components/WriteComment';

import Comment from '../components/Comment';

import { ReviewProvider } from '../context/ReviewProvider';

const TrackDetailContainer = styled.div`
  width: 73%;
  min-height: 70vh;
  font-size: 1.2rem;
  border: 1px solid lime;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  padding: 20px;
`;

const TrackOverview = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  text-align: center;
`;

const ArtBig = styled.img`
  width: 300px;
  height: 300px;
`;

const TitlePlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 300px;
`;

const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Title = styled.h1`
  margin-bottom: 50px;
`;

const TrackDetail = () => {
  const { title } = useParams();

  const trackIndex = musicPortfolio.findIndex((track) => title && track.title.includes(title));

  console.log(title);

  return (
    <TrackDetailContainer>
      <ReviewProvider>
        <TrackOverview>
          <ArtBig src={musicPortfolio[trackIndex].img} />
          <TitlePlayerWrapper>
            <Title>{musicPortfolio[trackIndex].title}</Title>
            <AudioPlayer song={musicPortfolio[trackIndex].src} />
          </TitlePlayerWrapper>
          <Stars stars={3} starSize={40} />
        </TrackOverview>

        <FeedbackContainer>
          <StarsFeedback />
          <WriteComment title={title} />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </FeedbackContainer>
      </ReviewProvider>
    </TrackDetailContainer>
  );
};

export default TrackDetail;
