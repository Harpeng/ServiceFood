import {useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorRequestStatus } from "../redux/ui/request/selector";

export function useMakeRequest(thunk) {
    const request = useRef();

    const dispatch = useDispatch();

    const requestStatus = useSelector((state) => selectorRequestStatus(state, request.current?.requestId));

    const makeRequest = useCallback((...params) => {
        request.current = dispatch(thunk(...params));
    }, [dispatch, thunk]
    );

    return [requestStatus, makeRequest];

}