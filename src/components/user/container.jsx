import { User } from "./component";
import { useSelector } from "react-redux";
import { selectUsersById } from "../../redux/entities/users/selectors";

export const UserContainer = ({ userId, ...props }) => {
  const user = useSelector((state) => selectUsersById(state, userId));

  if (!user) {
    return null;
  }

  return <User {...props} user={user} />;
};
