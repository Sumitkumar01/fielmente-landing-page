import Image from "next/image";
import img from "../../../public/images/landingPage/img.png";
import logo from "../../../public/images/landingPage/logo2.png";
import Link from "next/link";

const Footer2 = () => {
  return (
    <footer>
      <div className="py-9 bg-[#070525]">
        <div className="max-width">
          <div className="lg:grid lg:grid-cols-2 gap-2 flex flex-col-reverse">
            <picture className="flex items-center justify-center">
              <Image
                src={img}
                alt="alt"
                width={600}
                height={600}
                className="object-cover"
              />
            </picture>
            <form className="w-full bg-white rounded-3xl py-12 px-11">
              <div className="lg:flex items-center justify-center gap-2">
                <hr className="w-[20%] border-[#5F5E5E] lg:block hidden" />
                <h2 className="text-3xl text-center text-[#2F2F2F] font-bold">
                  Looking to discuss with us?
                </h2>
                <hr className="w-[20%] border-[#5F5E5E] lg:block hidden" />
              </div>
              <div className="lg:grid lg:grid-cols-2 gap-4 mt-7">
                <div className="rounded-xl col-span-full text-xl p-3 border border-[#5F5E5E] mb-5">
                  <input
                    type="text"
                    className="outline-none text-black  w-full placeholder:capitalize placeholder:text-[#5F5F5F]"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="rounded-xl col-span-full text-xl p-3 border border-[#5F5E5E] mb-5">
                  <input
                    type="text"
                    className="outline-none text-black  w-full placeholder:capitalize placeholder:text-[#5F5F5F]"
                    placeholder="Enter Address"
                  />
                </div>
                <div className="rounded-xl col-span-1 text-xl p-3 border border-[#5F5E5E] mb-5">
                  <input
                    type="text"
                    className="outline-none text-black  w-full placeholder:capitalize placeholder:text-[#5F5F5F]"
                    placeholder="Enter Your mobile number"
                  />
                </div>
                <div className="rounded-xl col-span-1 text-xl p-3 border border-[#5F5E5E] mb-5">
                  <input
                    type="text"
                    className="outline-none text-black  w-full placeholder:capitalize placeholder:text-[#5F5F5F]"
                    placeholder="brand name"
                  />
                </div>
                <div className="rounded-xl col-span-full p-3 border border-[#5F5E5E] mb-5 ">
                  <textarea
                    className="outline-none text-black   text-xl w-full resize-none placeholder:capitalize placeholder:text-[#5F5F5F]"
                    rows={3}
                    placeholder="message"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#070527] text-white capitalize py-3 text-xl rounded-xl shadow-md shadow-black/25"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#030217] py-6">
        <div className="max-width">
          <div className="flex items-center justify-between">
            <picture>
              <Image src={logo} alt="alt" width={100} height={70} />
            </picture>
            <ul className="flex lg:flex-row flex-col lg:justify-center lg:items-center items-end lg:gap-6 gap-1">
              <li>
                <Link
                  href="href"
                  className="text-white text-lg font-normal capitalize "
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="href"
                  className="text-white text-lg font-normal capitalize "
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
