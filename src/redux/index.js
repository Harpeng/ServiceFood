import { configureStore } from "@reduxjs/toolkit";
import user from "./entities/users";
import review from "./entities/reviews";
import restaurant from "./entities/restaraunts";
import dish from "./entities/dishes";

 const store = configureStore({
    reducer: {
        user,
        review,
        restaurant,
        dish,
    },
 });

 export default store;