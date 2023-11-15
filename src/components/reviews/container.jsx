import { useSelector } from "react-redux";
import { Reviews } from "./component";
import { getReviews } from "../../redux/entities/reviews/thunks/get-reviews";
import { getUsers } from "../../redux/entities/users/thunks/get-users";
import {selectRestaurantReviewsById } from "../../redux/entities/restaurants/selectors";
import { useRequest } from "../../hooks/use-request";
import { REQUEST_STATUS } from "../../constants/statuses";

export const ReviewsContainer = ({restaurantId, ...props}) => {
    const restaurantReviews = useSelector((state) => selectRestaurantReviewsById(state, restaurantId))

    const reviewLoadingStatus = useRequest(getReviews, restaurantId);
    const userLoadingStatus = useRequest(getUsers);

    if(
        reviewLoadingStatus === REQUEST_STATUS.pending ||
        userLoadingStatus === REQUEST_STATUS.pending
    ) {
        return <div>Loading...</div>
    }

    return(
        <Reviews {...props} reviewId={restaurantReviews} restaurantId={restaurantId} />
    );
}