import { ThemeProvider } from "./contexts/Theme";
import { Provider } from "react-redux";
import store from "./redux";
import { MainContainer } from "./pages/main/container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/not-found/component";
import { HomePage } from "./pages/home-page/component";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/restaurants" element={<MainContainer />} />
            <Route path="*" element={< NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
