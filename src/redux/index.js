import { configureStore } from "@reduxjs/toolkit";
import user from "./entities/users";
import review from "./entities/reviews";
import restaurant from "./entities/restaraunts";
import dish from "./entities/dishes";
import request from "./ui/request";
import { loggerMiddleware } from "./middleware/logger";

 const store = configureStore({
    reducer: {
        user,
        review,
        restaurant,
        dish,
        request,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        loggerMiddleware
    ]
 });

 export default store;