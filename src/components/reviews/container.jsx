import { useDispatch } from "react-redux";
import { Reviews } from "./component";
import { useEffect } from "react";
import { getReviews } from "../../redux/entities/reviews/thunks/get-reviews";
import { getUsers } from "../../redux/entities/users/thunks/get-users";

export const ReviewsContainer = ({reviews, ...props}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviews(reviews))
    }, [reviews]);

    useEffect(() => {
        dispatch(getUsers())
    }, []);

    return(
        <Reviews {...props} reviewId={reviews} />
    );
}