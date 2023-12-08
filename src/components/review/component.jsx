import { UserContainer } from "../user/container";

export const Review = ({ review }) => {

  if (!review) {
    return null;
  }


  return (
    <>
      <UserContainer userId={review.userId} />
      <p>{review.text}</p>
      <p>rating: {review.rating}</p>
    </>
  );
};
