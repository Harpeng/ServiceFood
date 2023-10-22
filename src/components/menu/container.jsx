import { useEffect } from "react";
import { Menu } from "./component"
import { useDispatch } from "react-redux";
import { getDishes } from "../../redux/entities/dishes/thunks/get-dishes";

export const MenuContainer = ({...props}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDishes());
    }, []);

    return (
        <Menu {...props} />
    );
}