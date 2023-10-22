import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component";
import { useEffect } from "react";
import { getReviews } from "../../redux/entities/reviews/thunks/get-reviews";
import { getUsers } from "../../redux/entities/users/thunks/get-users";
import {selectRestaurantReviewsById } from "../../redux/entities/restaraunts/selectors";

export const ReviewsContainer = ({restaurantId, ...props}) => {
    const restarauntReviews = useSelector((state) => selectRestaurantReviewsById(state, restaurantId))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviews(restaurantId))
    }, [restaurantId]);

    useEffect(() => {
        dispatch(getUsers())
    }, []);

    return(
        <Reviews {...props} reviewId={restarauntReviews} />
    );
}