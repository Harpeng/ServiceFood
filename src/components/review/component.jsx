import { UserContainer } from "../user/container";

export const Review = ({ review }) => {
  return (
    <>
      <UserContainer reviewId={review} />
      <p>{review.text}</p>
      <p>rating: {review.rating}</p>
    </>
  );
};
