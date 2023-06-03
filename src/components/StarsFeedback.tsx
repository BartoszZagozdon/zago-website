import styled from 'styled-components';

import { useState } from 'react';

import { HalfStar, FullStar, EmptyStar } from '../utils/Stars';

const StarsContainer = styled.div`
  display: flex;
  gap: 10px;
  border: 0px solid red;
`;

const StarContainer = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
`;

const StarHitBox = styled.div<{ isSecondHalf: boolean }>`
  position: absolute;
  width: 50%;
  height: 100%;
  border: 0px solid lime;
  right: ${({ isSecondHalf }) => (isSecondHalf ? '0' : 'initial')};
`;

const StarsFeedback = () => {
  const [score, setScore] = useState(0);

  const [isScoreLocked, setIsScoreLocked] = useState(false);

  console.log(score);

  return (
    <StarsContainer onMouseLeave={() => !isScoreLocked && setScore(0)} onClick={() => setIsScoreLocked(!isScoreLocked)}>
      <StarContainer>
        <StarHitBox
          onClick={() => setScore(0.5)}
          onMouseOver={() => !isScoreLocked && setScore(0.5)}
          isSecondHalf={false}
        ></StarHitBox>
        <StarHitBox
          onClick={() => setScore(1)}
          onMouseOver={() => !isScoreLocked && setScore(1)}
          isSecondHalf={true}
        ></StarHitBox>
        {score < 0.5 ? <EmptyStar /> : score === 0.5 ? <HalfStar /> : <FullStar />}
      </StarContainer>

      <StarContainer>
        <StarHitBox
          onClick={() => setScore(1.5)}
          onMouseOver={() => !isScoreLocked && setScore(1.5)}
          isSecondHalf={false}
        ></StarHitBox>
        <StarHitBox
          onClick={() => setScore(2)}
          onMouseOver={() => !isScoreLocked && setScore(2)}
          isSecondHalf={true}
        ></StarHitBox>
        {score < 1.5 ? <EmptyStar /> : score === 1.5 ? <HalfStar /> : <FullStar />}
      </StarContainer>

      <StarContainer>
        <StarHitBox
          onClick={() => setScore(2.5)}
          onMouseOver={() => !isScoreLocked && setScore(2.5)}
          isSecondHalf={false}
        ></StarHitBox>
        <StarHitBox
          onClick={() => setScore(3)}
          onMouseOver={() => !isScoreLocked && setScore(3)}
          isSecondHalf={true}
        ></StarHitBox>
        {score < 2.5 ? <EmptyStar /> : score === 2.5 ? <HalfStar /> : <FullStar />}
      </StarContainer>

      <StarContainer>
        <StarHitBox
          onClick={() => setScore(3.5)}
          onMouseOver={() => !isScoreLocked && setScore(3.5)}
          isSecondHalf={false}
        ></StarHitBox>
        <StarHitBox
          onClick={() => setScore(4)}
          onMouseOver={() => !isScoreLocked && setScore(4)}
          isSecondHalf={true}
        ></StarHitBox>
        {score < 3.5 ? <EmptyStar /> : score === 3.5 ? <HalfStar /> : <FullStar />}
      </StarContainer>

      <StarContainer>
        <StarHitBox
          onClick={() => setScore(4.5)}
          onMouseOver={() => !isScoreLocked && setScore(4.5)}
          isSecondHalf={false}
        ></StarHitBox>
        <StarHitBox
          onClick={() => setScore(5)}
          onMouseOver={() => !isScoreLocked && setScore(5)}
          isSecondHalf={true}
        ></StarHitBox>
        {score < 4.5 ? <EmptyStar /> : score === 4.5 ? <HalfStar /> : <FullStar />}
      </StarContainer>
    </StarsContainer>
  );
};

export default StarsFeedback;
