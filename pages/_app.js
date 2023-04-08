import Layouts from "../Components/Layouts/Layouts";
import "remixicon/fonts/remixicon.css";

import DashboardLayout from "../Components/Dashboard/Layouts/DashboardLayout";
import { useRouter } from "next/router";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      {router.asPath.split("/")[1] === "dashboard" && (
        <DashboardLayout>{<Component {...pageProps} />}</DashboardLayout>
      )}
      {router.asPath.split("/")[1] === "dashboard" || (
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      )}
    </>
  );
}

export default MyApp;
