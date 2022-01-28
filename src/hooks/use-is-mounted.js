import { useEffect, useState } from "react";

export default function useIsMounted() {
  let [isMounted, set] = useState(false);

  useEffect(() => {
    set(true);
  }, []);

  return isMounted;
}
