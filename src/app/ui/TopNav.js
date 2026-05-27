'use client'

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import LogoMark from "./LogoMark";
import {
  Menu as MobileMenuIcon
} from "lucide-react";

export default function TopNav() {
  const pathname = usePathname()

  const [menuOpen, setMenuOpen] = useState(false);
  const [rootPathStr, setRootPathStr] = useState('#');

  useEffect(() => {
    if (pathname === '/') {
      setRootPathStr('#')
    } else {
      setRootPathStr('/#')
    }
  }, [pathname, setRootPathStr])

  /** Keep menuOpen in sync with menu state. */
  function toggleMenuState() {
      setMenuOpen(!menuOpen);
  }
  /** Close menu. */
  function closeMenu() {
      setMenuOpen(false);
  }

  const mobileMenuOpenClassName = `w-full ${!menuOpen && 'hidden'} absolute top-14n right-0`;

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-[#f7fbff]/70 border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <LogoMark />
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight">South Loop Urbanists</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-semibold">
              <a href={`/about`} className="hover:underline">About</a>
              <a href={`${rootPathStr}pillars`} className="hover:underline">Pillars</a>
              <a href="/events" className="hover:underline">Events</a>
          </nav>
          <nav className="md:hidden">
            <button data-collapse-toggle="navbar-hamburger" 
                type="button" 
                className="inline-flex items-center justify-center p-2 w-12 h-12 text-sm rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                aria-controls="navbar-hamburger" 
                aria-expanded="false"
                onClick={toggleMenuState}>
              <span className="sr-only">Open main menu</span>
              <MobileMenuIcon size={48}/>
            </button>
            <div className={mobileMenuOpenClassName} id="navbar-hamburger">
              <ul className="flex flex-col font-medium mt-4 bg-[#f7fbff] dark:bg-gray-800 dark:border-gray-700 shadow-lg font-semibold">
                <li>
                  <a href="/about" className="block py-2 px-3 border-b-2 text-gray-900 hover:bg-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeMenu}>About</a>
                </li>
                <li>
                  <a href={`${rootPathStr}pillars`} className="block py-2 px-3 border-b-2 text-gray-900 hover:bg-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeMenu}>Pillars</a>
                </li>
                <li>
                  <a href="/events" className="block py-2 px-3 border-b-2 text-gray-900 hover:bg-white dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeMenu}>Events</a>
                </li>
                <li>
                  <a href={`${rootPathStr}join`} className="block py-2 px-3 border-b-2 text-gray-900 hover:bg-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeMenu}>Join</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    </header>
  )
}
