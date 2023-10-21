import { User } from "./component";
import { useSelector } from "react-redux";
import { selectUsersById } from "../../redux/entities/users/selectors";

export const UserContainer = ({reviewId}) => {
    const user = useSelector((state) => selectUsersById(state, reviewId.userId));

    return (
        <User user={user} />
    );
}