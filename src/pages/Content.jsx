// icons
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

//components
import HeroImg from "../components/HeroImg";

// image import
import heroBackground from "../assets/img/bg-content.jpg";

function Content() {
  return (
    <div>
      <HeroImg backgroundImage={heroBackground} title="Content" subtitle="The most comprehensive content in the marketplace today" />
      <div className="py-24 bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <h2 className="text-4xl font-extrabold leading-8 text-center text-gray-900">
            Our Direct Connections
          </h2>
          <hr className="w-20 mx-auto mt-4 mb-8 text-center border-2 border-primary" />
          {/* 1ST Row */}
          <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 justify-items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="object-contain w-[80%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/booking-transparent.c3c91a80d66c.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/expedia-logo.237294aab800.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[80%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/hotelbeds-logo.ed4d535d958c.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-14 sm:col-start-2 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/priceline.24041eb98c5a.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[110%] col-span-2 col-start-2 max-h-20 sm:col-start-auto lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/mr-mrs-smith.e808df656de7.jpg?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
          </div>
          {/* 2ND Row */}
          <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-16 justify-items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="object-contain w-full col-span-2 max-h-20 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/caesars-entertainment-logo.9ba6d66dca39.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[90%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/eglobalfares-logo-big.c5354d86eafb.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-24 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/ttc-logo.cd0daae16b3f.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[90%] col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/travelfusion.9f3620157568.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[70%] col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/mozio.92e24f1df0d5.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
          </div>
          {/* 3RD Row */}
          <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-16 justify-items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/viator-logo.ae09ab95ae48.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[90%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/amadeus_logo.9bc061934644.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[70%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/sabre-big.029376296341.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/travelport-logo-new.10ceeb7fa3d8.svg"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 col-start-2 max-h-16 sm:col-start-auto lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/stripe-logo.fce50425877e.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
          </div>
          
          {/* 4TH Row */}
          <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-16 justify-items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="object-contain w-[80%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/shift4.8d1ed8d64cf4.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-16 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/airgateway-logo.c05c2cc7d605.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[90%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/connex-pay.1634aaa30d6a.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/aig-logo.84ec7326d71f.jpg?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 col-start-2 max-h-20 sm:col-start-auto lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/vervotech.86a8f18f002f.jpg?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
          </div>

          {/* 5TH Row */}
          <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-16 justify-items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[90%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/leonardo.d1bf63f650d3.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/shiji.5e3be6e76a5c.png?"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[90%] col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/trustyou-logo.de55458a6221.png?width=4000"
              alt="Supplier Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Supplier Logo"
              width={158}
              height={48}
            />
          </div>
        </div>

        {/* ABOVE & BEYOND */}
        <div className="px-6 py-24 mx-auto sm:py-32 max-w-7xl lg:px-8">
          <h2 className="text-4xl font-extrabold leading-8 text-center text-gray-900">
            Above & Beyond Customers
          </h2>
          <hr className="w-20 mx-auto mt-4 mb-8 text-center border-2 border-primary" />
          {/* 1ST Row */}
          <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-16 justify-items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="object-contain w-[90%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/3ihg.1e1b024f5bcf.jpg?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-16 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/2hilton-logo2.876f99a5552e.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[80%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/13choice.016e684bc2db.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[90%] col-span-2 max-h-14 sm:col-start-2 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/wyndham-hotels.5864ecb6d4a6.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[90%] col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/1accor.2ce25488e204.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
          </div>
          {/* 2ND Row */}
          <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-16 justify-items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="object-contain w-[80%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/6omni-hotels-and-resorts-1200px-logo.2ceb233a0ae3.jpg?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/9glh_hotel_management_logo.d1679825504b.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[80%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/clayton.29425c88bd48.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-14 sm:col-start-2 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/pan_pacific_hotels.7c407f0a3073.jpg?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[80%] col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/11hotelrez_logo_b.423d8ac90525.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
          </div>
          {/* 3RD Row */}
          <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-16 justify-items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="object-contain w-[90%] col-span-2 max-h-16 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/crown_resorts_logo.87770785541b.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-20 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/stoke-place-logo.45d30c89c956.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[90%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/8design.475eb95b6952.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/7nh-hotels.024bf0c54540.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[70%] col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/minor-hotels.4a617829afe3.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
          </div>
          {/* 4TH Row */}
          <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-16 justify-items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="object-contain w-[80%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/4radisson-logo.bfb57715aad1.jpg?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-20 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/citadines-logo.e0af46701883.jpg?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-20 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/17millenium.2b55d6d5cc66.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-20 sm:col-start-2 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/lhw-logo.b82492892adb.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 col-start-2 max-h-20 sm:col-start-auto lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/5the-ascott-limited-logo-7a1ec19f19-seeklogocom.8540400cd218.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
          </div>
          {/* 5TH Row */}
          <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-16 justify-items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="object-contain w-[70%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/ameron-logo.5c739e54c0ee.svg"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-16 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/studio-allston.8e90c85fe4b1.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[80%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/melia.4b5b03ca2632.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-16 sm:col-start-2 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/park-royal.5fc0ef2b61eb.jpg?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 col-start-2 max-h-16 sm:col-start-auto lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/pestana.11c02a52b98a.jpg?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
          </div>
          {/* 6TH Row */}
          <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-16 justify-items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="object-contain w-[80%] col-span-2 max-h-12 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/rosewood-hotels.8470a7301403.jpg?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-20 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/small-luxury-hotels.08811e207c1c.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-20 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/quest-apartments.bf707272cd2c.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-full col-span-2 max-h-20 sm:col-start-2 lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/red-lion.2ba3c3ee6857.jpeg?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
            <img
              className="object-contain w-[80%] col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
              src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/35897/sonesta-hotels.270996a7c94c.png?"
              alt="Hotel Partner Logo"
              width={158}
              height={48}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Content;
