import { useGetReviewsQuery } from "../../redux/services/api";
import { Reviews } from "./component";


export const ReviewsContainer = ({restaurantId, ...props}) => {
    const {data: restaurantReviews, isFetching } = useGetReviewsQuery(restaurantId);


    if (isFetching) {
        return <h3>Loading...</h3>;
      }

      console.log(restaurantReviews)

    return(
        <Reviews {...props} reviews={restaurantReviews} restaurantId={restaurantId} />
    );
}