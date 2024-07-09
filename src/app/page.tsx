import Image from "next/image";
import MarketingAgency from "./components/marketingAgency";
import MileStones from "./components/mileStones";
import OurServices from "./components/ourServices";
import ChooseUs from "./components/chooseUs";
import HotelPerformacne from "./components/hotelPerformacne";
import OurClients from "./components/ourClients";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Market Agency***** */}
      <div className="bg-blue-dark py-10" >
        <div className="max-width">
          <MarketingAgency />
        </div>
      </div>

      {/* MileStones ****** */}
      <div className="max-w-[900px] mx-auto lg:py-20 py-10">
        <MileStones />
      </div>

      {/* Services***** */}
      <div className="bg-blue-dark lg:py-20 py-10">
        <div className="max-width">
          <OurServices />
        </div>
      </div>

      {/* Choose Us****** */}
      <div className="lg:py-20 py-10">
        <div className="max-width">
          <ChooseUs />
        </div>
      </div>

      {/* Hotel Performance***** */}
      <div className="lg:py-20 py-10 bg-gray-secondary">
        <div className="max-width">
          <HotelPerformacne />
        </div>
      </div>

      {/* Our Clients**** */}
      <div className="bg-blue-dark lg:py-20 py-10">
        <div className="lg:max-w-[1280px] max-w-full mx-auto px-[1.5rem]">
          <OurClients />
        </div>
      </div>

      {/* Looking for Best Hotel***** */}
      <div className="lg:py-20 py-10 lg:px-6 px-9">
        <div className="lg:max-w-[920px] max-w-[1280px] mx-auto bg-blue-dark px-20 lg:py-16 py-10 grid md:grid-cols-5 gap-8 items-center rounded-3xl">
          <div className="md:col-span-4 lg:text-start text-center">
            <h2 className="md:text-4xl text-3xl">
              Looking for the India’s Best Hotel Marketing{" "}
              <span className="text-orange-primary">Agency?</span>
            </h2>
          </div>
          <div className="md:col-span-1 text-center">
            <Link
              href={"#contact"}
              className="bg-orange-primary font-bold px-8 py-5 rounded-md text-lg border border-orange-primary hover:bg-transparent duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
