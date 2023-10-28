import { REQUEST_STATUS } from "../../../constants/statuses";

export const selectorRequestModule = (state) => state.request;
export const selectorRequestStatus = (state, requestId) => selectorRequestModule(state)[requestId]?.status || REQUEST_STATUS.idle;