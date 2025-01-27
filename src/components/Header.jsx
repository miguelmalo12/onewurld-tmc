import { Fragment, useState } from "react";
import { NavLink, Link, useLocation } from 'react-router-dom';

// components
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import logo from '../assets/main-logo.png';
import favicon from '../../public/favicon.svg'

// icons
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

// data
const products = [
  {
    name: "Lorem Ipsum",
    description: "Lorem Ipsum dolor sit amet",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "New Title",
    description: "Lorem Ipsum dolor sit amet",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Ipsum Lorem",
    description: "Lorem Ipsum dolor sit amet",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Technology Item",
    description: "Lorem Ipsum dolor sit amet",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "One More Title",
    description: "Lorem Ipsum dolor sit amet",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-10 bg-white">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 py-0.5 px-1.5">
            <span className="sr-only">oneWurld TMC</span>
            <img
              className="w-auto h-12"
              src={logo}
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/" className={({ isActive }) => `text-base font-semibold leading-6 text-gray-900 hover:text-primary ${isActive ? 'nav-link-active text-midtone hover:text-midtone' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `text-base font-semibold leading-6 text-gray-900 hover:text-primary ${isActive ? 'nav-link-active text-midtone hover:text-midtone' : ''}`}>
            About Us
          </NavLink>
          <Popover className="relative">
            <Popover.Button className="flex items-center text-base font-semibold leading-6 text-gray-900 gap-x-1 hover:text-primary">
            <NavLink to="/technology" className={({ isActive }) => `text-base font-semibold leading-6 text-gray-900 hover:text-primary ${isActive ? 'nav-link-active text-midtone hover:text-midtone' : ''}`}>
              Technology
            </NavLink>
              {/* Dropdown arrow in desktop menu */}
              {/* <ChevronDownIcon
                className="flex-none w-5 h-5 text-gray-400"
                aria-hidden="true"
              /> */}
            </Popover.Button>
            
            {/* This the dropdown in the desktop menu */}

            {/* <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                    >
                      <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="w-6 h-6 text-gray-600 group-hover:text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="flex-none w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition> */}
          </Popover>

          <NavLink to="/content" className={({ isActive }) => `text-base font-semibold leading-6 text-gray-900 hover:text-primary ${isActive ? 'nav-link-active text-midtone hover:text-midtone' : ''}`}>
            Content
          </NavLink>
          <NavLink to="/service" className={({ isActive }) => `text-base font-semibold leading-6 text-gray-900 hover:text-primary ${isActive ? 'nav-link-active text-midtone hover:text-midtone' : ''}`}>
            Service
          </NavLink>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {location.pathname !== '/contact' && (
            <NavLink
              to="/contact"
              className="text-base font-semibold leading-6 text-gray-900 hover:text-primary"
            >
              Contact Us <span aria-hidden="true">&rarr;</span>
            </NavLink>
          )}
        </div>
      </nav>

      {/* MOBILE MENU */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="w-auto h-8"
                src={favicon}
                alt="onewurld tmc favicon"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {/* This is dropdown template for mobile */}
                {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
                <NavLink
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg ${
                      isActive ? 'text-primary underline' : 'text-gray-900'
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg ${
                      isActive ? 'text-primary underline' : 'text-gray-900'
                    }`
                  }
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/technology"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg ${
                      isActive ? 'text-primary underline' : 'text-gray-900'
                    }`
                  }
                >
                  Technology
                </NavLink>
                <NavLink
                  to="/content"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg ${
                      isActive ? 'text-primary underline' : 'text-gray-900'
                    }`
                  }
                >
                  Content
                </NavLink>
                <NavLink
                  to="/service"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg ${
                      isActive ? 'text-primary underline' : 'text-gray-900'
                    }`
                  }
                >
                  Service
                </NavLink>
              </div>
              <div className="py-6">
                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg ${
                      isActive ? 'text-primary underline' : 'text-gray-900'
                    }`
                  }
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
