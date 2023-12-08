/* eslint-disable no-undef */
import { ThemeProvider } from "./contexts/Theme";
import { Provider } from "react-redux";
import store from "./redux";
import { MainContainer } from "./pages/main/container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/not-found/component";
import { HomePage } from "./pages/home-page/component";
import {RestaurantContainer} from "./components/restaurant/container"

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter basename={process.env.NODE_ENV==='production' ? '/ServiceFood' : '/'}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/restaurants" element={<MainContainer />}>
              <Route path=":restaurantId" element={<RestaurantContainer />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
