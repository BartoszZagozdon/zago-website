import { useContext } from 'react';
import styled from 'styled-components';
import { ReviewContext } from '../context/ReviewProvider';

import { db } from '../api/firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const WriteCommentContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: start;
  width: 100%;
  margin-top: 30px;
`;

const NameInput = styled.input`
  width: 20%;
  min-width: 150px;
  height: 30px;
  border: 1px solid violet;
  background-color: black;
`;

const CommentInput = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid violet;
  background-color: black;
`;

const SubmitReview = styled.button`
  border: none;
  border-radius: 15px 15px;
  background-color: #2a2f90;
  padding: 10px;
`;

const WriteComment: React.FC<{ dbId: string }> = ({ dbId }) => {
  const { stars } = useContext(ReviewContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (stars !== 0) {
      const name = e.currentTarget.username.value === '' ? 'Anonymous' : e.currentTarget.username.value;

      const review = {
        stars: stars,
        name: name,
        comment: e.currentTarget.comment.value,
      };

      const docRef = doc(db, 'reviews', dbId);

      updateDoc(docRef, {
        review: arrayUnion(review),
      }).catch((error) => console.error(error));
    }
  };

  return (
    <WriteCommentContainer onSubmit={handleSubmit}>
      <NameInput id="username" placeholder="Write your name here..." />
      <CommentInput id="comment" placeholder="Write your comment here..." />
      <SubmitReview type="submit">Submit Review</SubmitReview>
    </WriteCommentContainer>
  );
};

export default WriteComment;
