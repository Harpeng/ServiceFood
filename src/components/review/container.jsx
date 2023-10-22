import { Review } from "./component";
import { selectReviewsById, selectReviewsId } from "../../redux/entities/reviews/selectors";
import { useSelector } from "react-redux";

export const ReviewContainer = ({reviewId, ...props}) => {
    const review = useSelector((state) => selectReviewsById(state, reviewId));


    if(!review) {
        return null;
    }

    return (
        <Review {...props} review={review}/>
    )
}