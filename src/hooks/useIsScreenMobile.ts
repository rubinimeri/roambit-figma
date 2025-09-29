import {
  useEffect,
  useState
} from "react";

export default function useIsScreenMobile(breakpoint: number = 600) {
  const [isScreenMobile, setIsScreenMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsScreenMobile(window.innerWidth < breakpoint);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isScreenMobile;
}