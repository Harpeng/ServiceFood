import { UserContainer } from "../user/container";

export const Review = ({ review }) => {

  return (
    <>
      <UserContainer userId={review.userId} />
      <p>{review.text}</p>
      <p>rating: {review.rating}</p>
    </>
  );
};
