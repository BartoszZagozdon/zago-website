import styled from 'styled-components';

import { HalfStar, FullStar, EmptyStar } from '../utils/Stars';

const StarsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: auto;
`;

const StarContainer = styled.div<{ size: number }>`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
`;

const Stars: React.FC<{ stars: number; starSize: number }> = ({ stars, starSize }) => {
  return (
    <StarsContainer>
      <StarContainer size={starSize}>
        {stars < 0.5 ? <EmptyStar /> : stars === 0.5 ? <HalfStar /> : <FullStar />}
      </StarContainer>
      <StarContainer size={starSize}>
        {stars < 1.5 ? <EmptyStar /> : stars === 1.5 ? <HalfStar /> : <FullStar />}
      </StarContainer>
      <StarContainer size={starSize}>
        {stars < 2.5 ? <EmptyStar /> : stars === 2.5 ? <HalfStar /> : <FullStar />}
      </StarContainer>
      <StarContainer size={starSize}>
        {stars < 3.5 ? <EmptyStar /> : stars === 3.5 ? <HalfStar /> : <FullStar />}
      </StarContainer>
      <StarContainer size={starSize}>
        {stars < 4.5 ? <EmptyStar /> : stars === 4.5 ? <HalfStar /> : <FullStar />}
      </StarContainer>
    </StarsContainer>
  );
};

export default Stars;
