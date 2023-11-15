import { REQUEST_STATUS } from "../../constants/statuses";
import { useMakeRequest } from "../../hooks/use-make-request"
import { createReview } from "../../redux/entities/reviews/thunks/post-reviews"
import { Form } from "./component"

export const FormContainer = ({restaurantId, ...props}) => {
    const [addReviewStatus, addReview] = useMakeRequest(createReview);

    console.log(restaurantId)

    if(addReviewStatus === REQUEST_STATUS.pending) {
        return <div>Loading...</div>
    }

    return (
        <Form {...props} onSubmit={(form) => {
            addReview({
                restaurantId,
                newReview: {
                    ...form,
                    userId: "52a63cc0-5a6f-41f3-9774-0161ea4c9b0c",
                }
            })
        }} />
    )
}