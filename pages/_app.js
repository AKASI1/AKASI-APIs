import { useEffect } from "react";
import "../styles/globals.css";

/*____________________________________________________*/

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/css/bootstrap.min.css")
      : null;
  }, []);

  return <Component {...pageProps} />;
}

/*____________________________________________________________________________________*/