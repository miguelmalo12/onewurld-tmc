// icons
import { MdAppSettingsAlt } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GrCloudComputer } from "react-icons/gr";

import { MdOutlineFlightTakeoff } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";

function Main() {
  return (
    <>
      {/* Info Banner */}
      <div className="relative bg-secondary"  id="why">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <a href="/" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                  <svg
                    className="w-10 h-10 text-deep-purple-900"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </a>
              <div className="max-w-xl mb-10 text-white md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 group">
                <h1 className="max-w-xl mb-6 font-sans text-4xl font-bold leading-none tracking-tight xl:text-6xl text-dark sm:text-4xl md:mx-auto">
                  Why <span className="text-primary">oneWurld?</span>
                </h1>
                <div className="w-1/2 mx-auto mb-5 text-center border-t border-gray-300"></div>
                <p className="text-dark md:text-lg">
                  As a oneWurld client, there is no compromise needed. You are
                  dealing with one travel management company: one wholly owned
                  network of global hubs, one single technology platform and one
                  source for all data. And of course, the knowledge you will
                  always be treated as our number one client. It’s called the
                  oneWurld Way.
                </p>
              </div>
              <div>
                <a
                  href="https://meetings.hubspot.com/maria-fernanda1/onewurld-demo-"
                  target="_blank"
                  className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 bg-white shadow-md hover:text-white hover:bg-primary focus:shadow-outline focus:outline-none"
                >
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 USPs */}
      <div className="relative bg-light">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl my-10 md:mx-auto sm:text-center lg:max-w-2xl md:my-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Our Expertise</span>
              </span>{" "}
            </h2>
            <p className="text-gray-700 md:text-lg">
              We are dedicated to helping our clients improve their travel program
              by making it easier to manage AND easier for their travelers to
              travel. We have a distinct advantage in the marketplace as we have
              our own technology, direct negotiated global content with all
              airlines, major hotel chains and car providers fully integrated with
              our 24/7 Service Team to provide personalized service when needed.
            </p>
          </div>
          <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
            <div className="sm:text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-medium sm:mx-auto sm:w-24 sm:h-24">
                <MdAppSettingsAlt className="w-10 h-10 text-deep-purple-accent-400" />
              </div>
              <h4 className="mb-2 font-semibold leading-5">Technology</h4>
              <p className="max-w-md mb-6 text-base text-gray-900 sm:mx-auto">
                Dive into the future of travel management with our advanced
                technology. Our platform offers seamless integration of
                cutting-edge booking tools and real-time data, simplifying and
                streamlining corporate travel for the modern business world.
              </p>
              <a
                href="/technology"
                aria-label=""
                className="inline-flex items-center font-semibold underline transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
            <div className="sm:text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-medium sm:mx-auto sm:w-24 sm:h-24">
                <GrCloudComputer className="w-10 h-10 text-deep-purple-accent-400" />
              </div>
              <h4 className="mb-2 font-semibold leading-5">Content</h4>
              <p className="max-w-md mb-6 text-base text-gray-900 sm:mx-auto">
                Travel is a service industry and we have over forty years of
                valuable experience. Our customers trust our experts to provide
                the answers needed to manage an efficient program.
              </p>
              <a
                href="/content"
                aria-label=""
                className="inline-flex items-center font-semibold underline transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
            <div className="sm:text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-medium sm:mx-auto sm:w-24 sm:h-24">
                <RiCustomerService2Fill className="w-10 h-10 text-deep-purple-accent-400" />
              </div>
              <h4 className="mb-2 font-semibold leading-5">Services</h4>
              <p className="max-w-md mb-6 text-base text-gray-900 sm:mx-auto">
                Travel is a service industry and we have over forty years of valuable experience. Our customers trust our experts to provide the answers needed to manage an efficient program.
              </p>
              <a
                href="/service"
                aria-label=""
                className="inline-flex items-center font-semibold underline transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="relative bg-cta-image">
        {/* Overlay */}
        <div className="bg-overlay"></div>

        <div className="px-4 py-16 mx-auto content-above-overlay sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <a href="/" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                  <svg
                    className="w-10 h-10 text-deep-purple-900"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </a>
              <div className="max-w-xl mb-10 text-white md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 group">
                <h1 className="max-w-2xl mb-6 font-sans text-4xl font-bold leading-none tracking-tight xl:text-6xl text-dark sm:text-6xl md:mx-auto">
                  We Make <span className="text-primary">Travel</span> Simple
                </h1>
                <div className="w-1/2 mx-auto mb-5 text-center border-t border-gray-300"></div>
                <p className="text-dark">
                  oneWurld is a global leader in corporate travel management.
                  We’ve grown steadily and sustainably in the last years. We are
                  entirely focused on providing our clients with superior
                  service, state-of-the-art technology, consulting services and
                  customization to meet their business needs.
                </p>
              </div>
              <div>
                <a
                  href="https://meetings.hubspot.com/maria-fernanda1/onewurld-demo-"
                  target="_blank"
                  className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 bg-white shadow-md hover:text-white hover:bg-primary focus:shadow-outline focus:outline-none"
                >
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d9d7687a-355f-4502-8ec4-7945db034688"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Want</span>
            </span>{" "}
            to see how simple corporate travel can be?
          </h2>
          <p className="text-gray-700 md:text-lg">
            Try a dedicated, global team of real people with over 30 years of
            experience in your sector.
          </p>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-5 text-center duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-medium">
              <MdOutlineFlightTakeoff className="w-8 h-8 text-deep-purple-accent-400" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">ARC Certified</h6>
            <p className="text-base text-gray-900">
              Experience unparalleled travel management with our ARC Certified
              services. As an ARC-accredited provider, we uphold the highest
              standards of financial and professional integrity, ensuring
              reliable and superior travel arrangements for every booking.
            </p>
          </div>
          <div className="p-5 text-center duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-medium">
              <RiComputerFill className="w-7 h-7 text-deep-purple-accent-400" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Solutions</h6>
            <p className="text-base text-gray-900">
              At oneWurld, we value innovation. It leads to creative solutions
              and new technologies that improve the traveler experience and
              management capabilities.
            </p>
          </div>
          <div className="p-5 text-center duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-medium">
              <FaTools className="w-6 h-6 text-deep-purple-accent-400" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Implementation</h6>
            <p className="text-base text-gray-900">
              Enjoy a smooth and efficient implementation process with us. Our
              system effortlessly integrates into your existing workflow,
              providing a customized solution that meets your business
              objectives, all supported by our dedicated team.
            </p>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-secondary md:w-auto bg-deep-purple-accent-400 hover:bg-primary focus:shadow-outline focus:outline-none"
          >
            Learn more
          </a>
        </div>
      </div>
    </>
  );
}

export default Main;
