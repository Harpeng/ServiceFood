import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorRequestStatus } from "../redux/ui/request/selector";

export function useRequest(thunk, ...params) {
    const request = useRef();

    const requestStatus = useSelector((state) => selectorRequestStatus(state, request.current?.requestId));

    const dispatch = useDispatch();

    useEffect(() => {
        request.current = dispatch(thunk(...params));

        return() => {
            request.current.abort();
            request.current = null;
        }
    }, [...params, thunk]);

    return requestStatus;
}