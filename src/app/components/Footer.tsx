"use client"
import { usePathname } from "next/navigation";
import Footer1 from "./Footer1Components";
import Footer2 from "./Footer2Component";
const Footer = () => {
    const pathName = usePathname();

    const FooterComponent =
      pathName === "/" ? Footer1 : pathName === "/landingpage" ? Footer2 : null;
      
    return <>{FooterComponent && <FooterComponent />}</>;
}

export default Footer