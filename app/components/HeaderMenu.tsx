"use client"; // Needed to use state in Next.js App Router

import { useState } from "react";

import Image from 'next/image'
import Link from "next/link";

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

              <header className="p-6 bg-slate-900 text-white drop-shadow-lg">
                <nav className="container mx-auto md:flex justify-between items-center">
                  <h1 className="text-2xl text-gray-300 inline"><Link href={'./'} title="home">Joosep Oskar Ehaver</Link></h1>
                  <button data-collapse-toggle="navbar-default " type="button" onClick={toggleNavMenu}
                    className="float-right inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <Image
                      src="/icons/menu.svg"
                      width={500}
                      height={500}
                      alt="Menu"
                      className="w-5 h-5 fill-current inline invert"
                    /> 
                  </button>
                  <ul className={`md:flex md:space-x-6  pl-4 md:pl-0 md:space-y-0 space-y-4 md:mt-0 mt-4 ${isOpen ? "" : "hidden"}`}>
                    <li><Link href="/#portfolio" className="hover:underline">Projects</Link></li>
                    <li><Link href="/#cv" className="hover:underline">CV</Link></li>
                    <li><a href="https://github.com/oskar13" target="_blank" className="hover:underline"><Image
                      src="/icons/github.svg"
                      width={500}
                      height={500}
                      alt="Github"
                      className="w-5 h-5 fill-current inline"
                    />  GitHub</a></li>
                    <li><Link href="/#contact" className="hover:underline">Contact</Link></li>
                  </ul>
                </nav>
        
              </header>
  );
}