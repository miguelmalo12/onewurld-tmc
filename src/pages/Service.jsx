// icons
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

//components
import HeroImg from "../components/HeroImg";

// image import
import logo24 from "../assets/logos/logo-oneW24.png";
import heroBackground from "../assets/img/bg-service.jpg";

const contacts = [
  {
    name: 'United States',
    number:
      '+1 (800) 7994451',
    icon: FaPhone,
  },
  {
    name: 'United Kingdom',
    number:
      '+44 (20) 83966666',
    icon: FaPhone,
  },
  {
    name: 'Mexico',
    number:
      '+52 (55) 85261991',
    icon: FaPhone,
  },
  {
    name: 'Canada',
    number:
      '+1 (647) 7990250',
    icon: FaPhone,
  },
  {
    name: 'Australia',
    number:
      '+61 (1800) 934233',
    icon: FaPhone,
  },
  {
    name: 'Sweden',
    number:
      '+46 (31) 3644232',
    icon: FaPhone,
  },
  {
    name: 'India',
    number:
      '+91 (1800) 9191386',
    icon: FaPhone,
  },
  {
    name: 'Whastapp',
    number:
      '+ (647) 951-4480',
    icon: FaWhatsapp,
  },
  {
    name: 'Skype',
    number:
      'hereforyou.callcentre',
    icon: FaSkype,
  },
  {
    name: 'Email',
    number:
      'hereforyou@wwreservations.com',
    icon: IoIosMail,
  },
  
]

function Service() {
  return (
    <div>
      <HeroImg backgroundImage={heroBackground} title="Service" subtitle="24/7 traveller assistance" />
      <div className="py-24 bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:text-center">
            <img className="h-auto mx-auto w-96 mb-14" src={logo24} alt="onewurld24-logo" />
            
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Round the clock real time support
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We understand that no matter how good your product is, the customer service has to be perfect in order to succeed.
              We have built a dedicated travel specific call center that is available 24 hours a day, every day of the week, including holidays to support our products.
            </p>
          </div>
        </div>
      </div>
      <div className="py-24 bg-secondary sm:py-32">
        <div className="grid items-center justify-center max-w-5xl grid-cols-1 mx-auto mt-10 text-base leading-7 lg:px-8 gap-x-8 gap-y-12 md:grid-cols-2">
          {contacts.map((contact) => (
            <div key={contact.name} className="relative flex flex-col gap-4 pl-9 w-96">
              <div className="block w-full text-2xl font-semibold text-white">  
                {contact.name}
              </div>{' '}
              
              <div className="flex items-center gap-3">
                <contact.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                <p className="text-lg text-gray-400">{contact.number}</p>
              </div>
              <hr className="mt-5 mb-5 border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
