export const Review = ({ user, review }) => {
  return (
    <>
      <span>{user.name}:</span>
      <p>{review.text}</p>
      <p>rating: {review.rating}</p>
    </>
  );
};
