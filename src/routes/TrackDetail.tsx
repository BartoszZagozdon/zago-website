import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import BorderRules from '../utils/borderAnimation';

import musicPortfolio from '../utils/musicPortfolio';

import AudioPlayer from '../components/AudioPlayer';
import StarsFeedback from '../components/StarsFeedback';
import Stars from '../components/Stars';
import Loader from '../components/Loader';

import WriteComment from '../components/WriteComment';

import Comment from '../components/Comment';

import { ReviewProvider } from '../context/ReviewProvider';
import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../api/firebase';

import ReviewType from '../Types/ReviewType';

const TrackDetailContainer = styled(BorderRules)`
  width: 73%;
  min-height: 70vh;
  font-size: 1.2rem;
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

  @media only screen and (max-width: 845px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ArtBig = styled.img`
  width: 300px;
  height: 300px;

  @media only screen and (max-width: 1560px) {
    width: 200px;
    height: 200px;
  }
`;

const TitlePlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left: 40px;
  flex-grow: 1;

  @media only screen and (max-width: 1300px) {
    flex-grow: 0;
    align-items: center;
  }

  @media only screen and (max-width: 970px) {
    margin-left: 10px;
  }
`;

const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

const TrackDetail = () => {
  const { title } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dbId = (title ? (title === 'u ok' ? 'UOk' : title === 'WatashiWa!' ? 'WatashiWa' : title) : '').replace(
    /\s/g,
    ''
  );

  const docRef = doc(db, 'reviews', dbId);

  useEffect(() => {
    onSnapshot(docRef, (snapshot) => {
      setIsLoading(false);
      const reviewsData = snapshot.data()?.review.reverse();

      setReviews(reviewsData);
    });
  }, []);

  const trackIndex = musicPortfolio.findIndex((track) => title && track.title.includes(title));

  console.log(title);
  console.log(typeof reviews);

  let avgStars = 0;

  reviews.forEach((review: ReviewType) => {
    avgStars += review.stars;
  });

  avgStars = reviews.length ? Math.round((avgStars / reviews.length) * 2) / 2 : 0;

  console.log(avgStars);

  return (
    <TrackDetailContainer>
      <ReviewProvider>
        <TrackOverview>
          <ArtBig src={musicPortfolio[trackIndex].img} />
          <TitlePlayerWrapper>
            <Title>{musicPortfolio[trackIndex].title}</Title>
            <Stars stars={avgStars} starSize={40} />
            <AudioPlayer song={musicPortfolio[trackIndex].src} />
          </TitlePlayerWrapper>
        </TrackOverview>

        <FeedbackContainer>
          <StarsFeedback />
          <WriteComment dbId={dbId} />
          {isLoading && <Loader />}
          {reviews.map((review: ReviewType, index) => {
            return <Comment key={index} stars={review.stars} name={review.name} comment={review.comment} />;
          })}
        </FeedbackContainer>
      </ReviewProvider>
    </TrackDetailContainer>
  );
};

export default TrackDetail;
