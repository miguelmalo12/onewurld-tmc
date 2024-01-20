// icons
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

//components
import HeroImg from "../components/HeroImg";

// image import
import heroBackground from "../assets/img/bg-technology.jpg";

function Technology() {
  return (
    <div>
      <HeroImg
        backgroundImage={heroBackground}
        title="Technology"
        subtitle="Technology and Data are our competitive edge"
      />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <a href="/" aria-label="Go Home" title="Logo" className="inline-block mb-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52">
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
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              Technology{" "}
              <span className="inline-block text-deep-purple-accent-400"> </span>
            </h5>
            <p className="mb-6 text-gray-900">
              Our goal is to simplify the complex business of travel management utilizing
              corporate platform built on best-in-class technology. It is designed to make
              our service easy to use and to integrate seamlessly with your business
              processes to deliver all the information you need to manage your travel
              programme – accurately, securely and fast. The complete picture.
            </p>
            <hr className="mb-5 border-gray-300" />
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/3260626/pexels-photo-3260626.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div className="lg:pr-10">
            <a href="/" aria-label="Go Home" title="Logo" className="inline-block mb-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52">
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
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              Data <span className="inline-block text-deep-purple-accent-400"> </span>
            </h5>
            <p className="mb-6 text-gray-900">
              Data can be sliced and diced in any number of ways. We can provide global
              clients with a single consolidated dataset, saving countless hours of
              wrestling with multiple datasets. We also have the ability to personalise
              the data to your requirements.
            </p>
            <hr className="mb-5 border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
