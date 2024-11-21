"use client";

import React, { useState, useEffect, useRef, useContext } from 'react';
import Link from 'next/link';
import { CartWishlistContext } from './CartWishlist';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { cartCount, wishlistCount } = useContext(CartWishlistContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="lg:flex lg:justify-between lg:items-center bg-[#ededed] text-[#0a0a0a] mx-auto py-4 px-4 md:px-8 lg:px-16 xl:px-64">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <div className="text-2xl font-bold">
          Bandage
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={`lg:flex lg:items-center lg:space-x-8 ${isOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 lg:mr-32">
          <button className="hover:text-gray-600 text-[#737373]">Home</button>
          <div className="relative flex justify-center" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="hover:text-gray-600 text-[#252B42] flex items-center">
              Shop <span className="text-sm ml-1">▼</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-4 w-48 bg-white border border-gray-300 rounded shadow-lg z-50 left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 2</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 3</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 4</li>
                </ul>
              </div>
            )}
          </div>
          <button className="hover:text-gray-600 text-[#737373]">About</button>
          <button className="hover:text-gray-600 text-[#737373]">Blog</button>
          <button className="hover:text-gray-600 text-[#737373]">Contact</button>
          <button className="hover:text-gray-600 text-[#737373]">Pages</button>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mt-4 lg:mt-0 justify-center items-center">
          <Link href="/login" className="flex items-center hover:text-gray-600 text-[#23A6F0]">
            <img src="/icons/profile.svg" alt="profile" className="w-5 h-5 mr-2" />
            Login / Register
          </Link>
          <div className="flex items-center space-x-4">
            <button onClick={toggleSearch} className="hover:text-gray-600">
              <img src="/icons/search.svg" alt="search" className="w-5 h-5" />
            </button>
            <div className={`transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-32 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="border border-gray-300 rounded p-1 w-full"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center">
              <button className="hover:text-gray-600 relative">
                <img src="/icons/cart.svg" alt="cart" className="w-5 h-5" />
              </button>
              <span className="text-[#23A6F0] ml-1">{cartCount}</span>
            </div>
            <div className="flex items-center">
              <button className="hover:text-gray-600 relative">
                <img src="/icons/wishlist.svg" alt="wishlist" className="w-5 h-5" />
              </button>
              <span className="text-[#23A6F0] ml-1">{wishlistCount}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;