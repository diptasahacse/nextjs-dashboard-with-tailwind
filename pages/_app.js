import Layouts from "../Components/Layouts/Layouts";
import "remixicon/fonts/remixicon.css";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp;
