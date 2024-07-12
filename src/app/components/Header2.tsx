import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo.webp";

const Header2 = () => {
  return (
    <header className="py-3">
      <nav className="max-width flex justify-between">
        <div className="relative max-w-[164px] w-full lg:aspect-[4/1.3] aspect-[4/1.7]">
          <Image
            src={Logo}
            alt="alt"
            priority={true}
            fill
            className="object-contain"
          />
        </div>

        {/* desktop view */}
        <ul className="hidden lg:flex gap-4 items-center">
          <li className="text-black text-[20px] font-roboto font-normal">
            Dial Now:
          </li>
          <li>
            <Link
              href={"tel:+919501868775 "}
              className="flex items-center text-blue-dark text-lg border border-black box-shadow rounded-lg md:px-5 px-3 md:py-4 py-2"
            >
              {" "}
              <span className="sr-only">call icon</span>
              <PhoneIcon /> +919501868775
            </Link>
          </li>
        </ul>

        {/* mobile view */}
        <div className="lg:hidden flex items-center">
          <Link href={"tel:+919501868775 "} className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-dark">
            {" "}
            <span className="sr-only">call icon</span>
            <OutlinePhoneIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header2;

export const PhoneIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.64593 3H4.89474C3.8483 3 3 3.8483 3 4.89474C3 13.7894 10.2106 21 19.1053 21C20.1517 21 21 20.1517 21 19.1053V16.3541C21 15.5363 20.5021 14.8008 19.7428 14.4971L17.1071 13.4428C16.4251 13.17 15.6483 13.2931 15.084 13.7634L14.4031 14.3307C13.6084 14.993 12.44 14.94 11.7085 14.2085L9.79148 12.2915C9.06004 11.56 9.00704 10.3916 9.66925 9.5969L10.2366 8.91603C10.7069 8.35169 10.83 7.57495 10.5572 6.89288L9.50289 4.25722C9.19916 3.4979 8.46374 3 7.64593 3Z"
        fill="#1D1768"
      />
    </svg>
  );
};

export const OutlinePhoneIcon = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0225 1.6429C12.624 1.81165 14.1199 2.52195 15.2629 3.65635C16.4059 4.79075 17.1274 6.28129 17.3082 7.88147M11.0225 4.78576C11.7953 4.93813 12.5044 5.31928 13.0578 5.87971C13.6113 6.44015 13.9835 7.154 14.1261 7.92861M17.269 13.3658V15.7229C17.2698 15.9417 17.225 16.1583 17.1374 16.3588C17.0497 16.5593 16.9211 16.7393 16.7599 16.8872C16.5986 17.0352 16.4083 17.1478 16.201 17.2179C15.9937 17.288 15.774 17.314 15.5561 17.2943C13.1383 17.0316 10.8159 16.2054 8.77538 14.8822C6.87696 13.6758 5.26743 12.0663 4.0611 10.1679C2.73322 8.11813 1.90686 5.78439 1.64896 3.35576C1.62932 3.13848 1.65514 2.9195 1.72478 2.71275C1.79441 2.506 1.90633 2.31601 2.05341 2.15489C2.2005 1.99376 2.37952 1.86503 2.57908 1.77688C2.77864 1.68873 2.99437 1.6431 3.21253 1.6429H5.56967C5.95098 1.63915 6.32065 1.77417 6.60977 2.02282C6.89889 2.27146 7.08773 2.61675 7.1411 2.99433C7.24059 3.74867 7.42509 4.48933 7.6911 5.20218C7.79681 5.48341 7.81969 5.78905 7.75702 6.08288C7.69436 6.37671 7.54878 6.64641 7.33753 6.86004L6.33967 7.8579C7.45818 9.82497 9.08688 11.4537 11.054 12.5722L12.0518 11.5743C12.2654 11.3631 12.5351 11.2175 12.829 11.1548C13.1228 11.0922 13.4284 11.115 13.7097 11.2208C14.4225 11.4868 15.1632 11.6713 15.9175 11.7708C16.2992 11.8246 16.6478 12.0168 16.8969 12.3109C17.1461 12.605 17.2785 12.9804 17.269 13.3658Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
