import { configureStore } from "@reduxjs/toolkit";
import user from "./entities/users";
import review from "./entities/reviews";
import restaurant from "./entities/restaurants";
import dish from "./entities/dishes";
import request from "./ui/request";
import { loggerMiddleware } from "./middleware/logger";
import cart from "./ui/cart";

 const store = configureStore({
    reducer: {
        user,
        review,
        restaurant,
        dish,
        request,
        cart,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        loggerMiddleware
    ]
 });

 export default store;