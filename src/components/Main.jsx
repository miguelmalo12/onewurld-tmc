// icons
import { MdAppSettingsAlt } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdCastForEducation } from "react-icons/md";

import { MdOutlineFlightTakeoff } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";

function Main() {
  return (
    <>
      {/* Info Banner */}
      <div className="bg-secondary">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <a href="/" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
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
              <div className="max-w-xl text-white mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 group">
                <h1 className="max-w-lg mb-6 font-sans text-8xl font-bold leading-none tracking-tight text-dark sm:text-4xl md:mx-auto">
                  Why <span className="text-primary">LetsGoThere?</span>
                </h1>
                <div className="border-t border-gray-300 my-2 mx-auto w-1/2 text-center"></div>
                <p className="text-dark md:text-lg">
                  As a LetsGoThere client, there is no compromise needed. You
                  are dealing with one travel management company: one wholly
                  owned network of global hubs, one single technology platform
                  and one source for all data. And of course, the knowledge you
                  will always be treated as our number one client. It’s called
                  the LetsGoThere Way.
                </p>
              </div>
              <div>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 shadow-md hover:text-deep-purple-900 bg-white hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
                >
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 USPs */}
      <div className="px-4 bg-light py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
            travel. Since 1983, our company has been growing and hiring travel
            experts who are passionate about our industry. We take pride in
            finding the best solutions for our valued clients.
          </p>
        </div>
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-medium sm:mx-auto sm:w-24 sm:h-24">
              <MdAppSettingsAlt className="w-12 h-12 text-deep-purple-accent-400" />
            </div>
            <h4 className="mb-2 font-semibold leading-5">Solutions</h4>
            <p className="max-w-md mb-6 text-base text-gray-900 sm:mx-auto">
              At LetsGoThere, we value innovation. It leads to creative
              solutions and new technologies that improve the traveler
              experience and management capabilities.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex underline items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-medium sm:mx-auto sm:w-24 sm:h-24">
              <RiCustomerService2Fill className="w-12 h-12 text-deep-purple-accent-400" />
            </div>
            <h4 className="mb-2 font-semibold leading-5">Services</h4>
            <p className="max-w-md mb-6 text-base text-gray-900 sm:mx-auto">
              Travel is a service industry and we have over forty years of
              valuable experience. Our customers trust our experts to provide
              the answers needed to manage an efficient program.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex underline items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-medium sm:mx-auto sm:w-24 sm:h-24">
              <MdCastForEducation className="w-12 h-12 text-deep-purple-accent-400" />
            </div>
            <h4 className="mb-2 font-semibold leading-5">Education</h4>
            <p className="max-w-md mb-6 text-base text-gray-900 sm:mx-auto">
              Our subject matter experts host many events and webinars to keep
              our customers and partners informed about what’s happening in the
              always-changing travel industry.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex underline items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="relative bg-cta-image">
        {/* Overlay */}
        <div className="bg-overlay"></div>

        <div className="px-4 content-above-overlay py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <a href="/" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
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
              <div className="max-w-xl text-white mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 group">
                <h1 className="max-w-2xl mb-6 font-sans text-8xl font-bold leading-none tracking-tight text-dark sm:text-6xl md:mx-auto">
                  We Make <span className="text-primary">Travel</span> Simple
                </h1>
                <div className="border-t border-gray-300 my-2 mx-auto w-1/2 text-center"></div>
                <p className="text-dark">
                  LetsGoThere is a global leader in corporate travel management.
                  We’ve grown steadily and sustainably in the last years. We are
                  entirely focused on providing our clients with superior
                  service, state-of-the-art technology, consulting services and
                  customization to meet their business needs.
                </p>
              </div>
              <div>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 shadow-md hover:text-deep-purple-900 bg-white hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
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
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-medium mx-auto">
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
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-medium mx-auto">
              <RiComputerFill className="w-7 h-7 text-deep-purple-accent-400" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Technology</h6>
            <p className="text-base text-gray-900">
              Dive into the future of travel management with our advanced
              technology. Our platform offers seamless integration of
              cutting-edge booking tools and real-time data, simplifying and
              streamlining corporate travel for the modern business world.
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-medium mx-auto">
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
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-primary transition duration-200 shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* CTA */}
      <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-12 lg:py-28">
          <h1 class="mb-4 mx-auto text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl max-w-xl">
            Ready to Transform Your Business Travel Experience?
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Embark on a journey of seamless corporate travel management with
            LetsGoThere. Say goodbye to the complexities and inefficiencies of
            traditional travel booking. Our cutting-edge platform offers a
            streamlined, user-friendly experience, ensuring your business
            travels are both cost-effective and comfortable.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 font-medium text-center text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 font-medium text-center text-white border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
