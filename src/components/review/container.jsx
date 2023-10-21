import { Review } from "./component";
import { useSelector } from "react-redux";
import { selectUsersById } from "../../redux/entities/users/selectors";
import { selectReviewsById } from "../../redux/entities/reviews/selectors";

export const ReviewContainer = ({reviewId, ...props}) => {
    const review = useSelector((state) => selectReviewsById(state, reviewId));
    const user = useSelector((state) => selectUsersById(state, review.userId));

    if(!review) {
        return null;
    }

    return (
        <Review {...props} user={user} review={review} />
    )
}