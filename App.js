import { Provider } from "react-redux";
import AppSrc from "./src";
import store from "./src/redux/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppSrc />
    </Provider>
  );
}
