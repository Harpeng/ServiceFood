import { ThemeProvider } from "./contexts/Theme";
import { Provider } from "react-redux";
import store from "./redux";
import { MainContainer } from "./pages/main/container";

export const App = () => {
  return (
    <Provider store={store}r>
      <ThemeProvider>
        <MainContainer />
      </ThemeProvider>
    </Provider>
  );
};
