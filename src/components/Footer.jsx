import logoSst from '../assets/logos/logo-sst.png';
import logoOnewurld from '../assets/logos/logo-oneW.png';
import logoAab from '../assets/logos/logo-aab.png';
import logoYourwurld from '../assets/logos/logo-yourW.png';
import arc from '../assets/img/arcgray.jpg';

function Footer() {
  return (
    <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h2 className='max-w-lg mb-16 font-sans text-4xl font-bold leading-none tracking-tight text-center text-gray-900 md:mx-auto'>Our Group Of Companies</h2>
      
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-1 lg:grid-cols-4">
        {/* SST Logo */}
        <div className='flex flex-col items-center gap-2 text-center'>
            <img className='h-12 mb-4' src={logoSst} alt="sst logo" />
            <div className="w-1/3 mx-auto mb-5 text-center border-t border-secondary"></div>
            <p>The perfect storm - Enabling our customers to leverage our technology, content and fulfillment services to thrive above others.</p>
            <div className="mt-4 text-center">
                <a href="https://snowstormtech.com/" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-secondary md:w-auto bg-deep-purple-accent-400 hover:bg-primary focus:shadow-outline focus:outline-none" target="_blank">
                    View Site
                </a>
            </div>
        </div>
        {/* oneW Logo */}
        <div className='flex flex-col items-center gap-2 text-center'>
            <img className='h-12 mb-4' src={logoOnewurld} alt="" />
            <div className="w-1/3 mx-auto mb-5 text-center border-t border-secondary"></div>
            <p>All-in-one platform that allows Leisure and Corporate Travel Agencies to compete and thrive in the marketplace.</p>
            <div className="mt-4 text-center">
                <a href="https://onewurld.com/" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-secondary md:w-auto bg-deep-purple-accent-400 hover:bg-primary focus:shadow-outline focus:outline-none" target="_blank">
                    View Site
                </a>
            </div>
        </div>
        {/* AAB Logo */}
        <div className='flex flex-col items-center gap-2 text-center'>
            <img className='h-12 mb-4' src={logoAab} alt="" />
            <div className="w-1/3 mx-auto mb-5 text-center border-t border-secondary"></div>
            <p>State of the art hotel technology with distribution through +60k agents across 5 continents generating over 8MM room nights.</p>
            <div className="mt-4 text-center">
                <a href="https://aabhotels.com/" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-secondary md:w-auto bg-deep-purple-accent-400 hover:bg-primary focus:shadow-outline focus:outline-none" target="_blank">
                    View Site
                </a>
            </div>
        </div>
        {/* yourWurld Logo */}
        <div className='flex flex-col items-center gap-2 text-center'>
            <img className='h-12 mb-4' src={logoYourwurld} alt="" />
            <div className="w-1/3 mx-auto mb-5 text-center border-t border-secondary"></div>
            <p>Breakthrough package technology with world-class content and fulfillment services allowing hoteliers to monetize their direct traffic.</p>
            <div className="mt-4 text-center">
                <a href="https://yourwurld.com/" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-secondary md:w-auto bg-deep-purple-accent-400 hover:bg-primary focus:shadow-outline focus:outline-none" target="_blank">
                    View Site
                </a>
            </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2024 oneWurld TMC, a division of Snowstorm Technologies. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <img src={arc} alt="arc certified logo" className='h-8' />
          </li>
          <li>
            <a
              href="https://onewurld.com/privacy-policy/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://onewurld.com/terms-conditions/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
