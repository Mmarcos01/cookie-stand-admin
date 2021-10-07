import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import { AuthProvider } from "../contexts/auth";
import { store } from "../redux-store";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
