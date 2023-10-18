import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./pages/main/component";
import { ThemeProvider } from "./contexts/Theme";
import { Provider } from "react-redux";
import store from "./redux";

export const App = () => {
  return (
    <Provider store={store}r>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </Provider>
  );
};
