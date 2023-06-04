import styled from 'styled-components';

import Stars from './Stars';

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

const Comment = () => {
  return (
    <CommentContainer>
      <NameStarContainer>
        <CommentName>Debil</CommentName>
        {/* <div style={{ position: 'absolute', bottom: '75%', left: '50px' }}>
          <Stars stars={4.5} starSize={10} />
        </div> */}
        <Stars stars={4.5} starSize={20} />
      </NameStarContainer>

      <CommentContent>
        Ale zajebiste japierdole normalnie najlepsze co słyszałem ale jestem debilem, więc ta muzyka też dla debili Ale
        zajebiste japierdole normalnie najlepsze co słyszałem ale jestem debilem, więc ta muzyka też dla debili
      </CommentContent>
    </CommentContainer>
  );
};

export default Comment;
