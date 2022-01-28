import Header from "../components/Header";
import Spinner from "../components/Spinner";
import useIsMounted from "../hooks/use-is-mounted";
import "../utils/firebase";
import "tailwindcss/tailwind.css";
import { Suspense } from "react";

export default function Wrapper(props) {
  let isMounted = useIsMounted();

  return isMounted && <App {...props} />;
}

function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Component {...pageProps} />
      </Suspense>
    </div>
  );
}
