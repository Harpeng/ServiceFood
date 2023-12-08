
import { useCreateReviewMutation } from "../../redux/services/api";
import { Form } from "./component"

export const FormContainer = ({restaurantId, ...props}) => {
    const [createReview, { isLoading }] = useCreateReviewMutation();

    if (isLoading) {
      return <h3>Sending...</h3>;
    }

    console.log(restaurantId)

    return (
        <Form {...props} onSubmit={(form) => {
            createReview({
                restaurantId,
                newReview: {
                    ...form,
                    userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
                }
            })
        }} />
    )
}