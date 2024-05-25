"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-White w-full flex justify-between items-center p-4">
    
        <button className="md:hidden" onClick={toggleMenu}>
          <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className="flex items-center justify-center w-full md:w-auto md:flex md:space-x-4">
          <Link href="/" prefetch={false}>
            <img className="md:inline-block md:w-auto mx-auto" src="/logo.png" alt="logo" height={70} width={70} />
          </Link>
        </div>

        <ul className={`hidden md:flex justify-center space-x-12 text-center items-center text-Textcolor font-light mx-auto ${isMenuOpen ? 'md:hidden' : ''}`}>
          <li>
            <Link href="/" prefetch={false}>Shop</Link>
          </li>
          <li>
            <Link href="/" prefetch={false}>Science</Link>
          </li>
          <li>
            <Link href="/" prefetch={false}>Press</Link>
          </li>
          <li>
            <Link href="/" prefetch={false}>Blogs</Link>
          </li>
          <li>
            <Link href="/" prefetch={false}>Tutorial</Link>
          </li>
        </ul>
        
        <div className="flex space-x-4">
          <Link href="/" prefetch={false}>
            <img className="h-8 w-8 md:h-6 md:w-6" src="/search.svg" alt="search icon" />
          </Link>
          <Link href="/" prefetch={false}>
            <img className="h-8 w-8 md:h-6 md:w-6" src="/login.svg" alt="login icon" />
          </Link>
          <Link href="/" prefetch={false}>
            <img className="h-8 w-8 md:h-6 md:w-6" src="/basket.svg" alt="basket icon" />
          </Link>
        </div>
      </nav>

     
      {isMenuOpen && (
        <ul className="md:hidden">
          <li><Link href="/" prefetch={false}>Shop</Link></li>
          <li><Link href="/" prefetch={false}>Science</Link></li>
          <li><Link href="/" prefetch={false}>Press</Link></li>
          <li><Link href="/" prefetch={false}>Blogs</Link></li>
          <li><Link href="/" prefetch={false}>Tutorial</Link></li>
        </ul>
      )}
    </>
  );
}
