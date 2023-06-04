import styled from 'styled-components';

import Stars from './Stars';

import ReviewType from '../Types/ReviewType';

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 30px;
  gap: 10px;
`;

const CommentName = styled.span`
  font-weight: bold;
`;

const CommentContent = styled.p`
  text-align: left;
`;

const NameStarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const Comment: React.FC<ReviewType> = ({ stars, name, comment }) => {
  return (
    <CommentContainer>
      <NameStarContainer>
        <CommentName>{name}</CommentName>
        {/* <div style={{ position: 'absolute', bottom: '75%', left: '50px' }}>
          <Stars stars={4.5} starSize={10} />
        </div> */}
        <Stars stars={stars} starSize={20} />
      </NameStarContainer>

      <CommentContent>{comment}</CommentContent>
    </CommentContainer>
  );
};

export default Comment;
