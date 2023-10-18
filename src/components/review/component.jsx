import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectReviewsById } from "../../redux/entities/reviews/selectors";
import { selectUsersById } from "../../redux/entities/users/selectors";

export const Review = ({ reviewId }) => {
    const review = useSelector((state) => selectReviewsById(state, reviewId));
    const user = useSelector((state) => selectUsersById(state, review.userId));
    console.log(user)

  return (
    <>
      <span>{user.name}:</span>
      <p>{review.text}</p>
      <p>rating: {review.rating}</p>
    </>
  );
};
