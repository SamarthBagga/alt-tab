import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="h-[6rem] text-white w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link legacyBehavior href="/">
              <span>
              <a className="flex-shrink-0">
                <img className="h-full w-[8rem] mt-5" src="/logo.jpeg" alt="Logo" />
              </a>
              </span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="hover:text-yellow-200 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="hover:text-yellow-200 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/services" className="hover:text-yellow-200 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link href="/clients" className="hover:text-yellow-200 px-3 py-2 rounded-md text-sm font-medium">Clients</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>
      <div className={`${showMenu ? "block" : "hidden"} md:hidden absolute w-full top-0 left-0 z-50`}>
        <div className="px-2 pt-2 pb-3 sm:px-3 bg-gray-800">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700">Home</Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700">About</Link>
          <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700">Services</Link>
          <Link href="/clients" className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700">Clients</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
