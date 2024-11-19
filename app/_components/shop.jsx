"use client";

import React, { useState, useContext, useEffect } from 'react';
import { CartWishlistContext } from './CartWishlist';

const Shop = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isWishlistAdded, setIsWishlistAdded] = useState(false);
  const [isCartAdded, setIsCartAdded] = useState(false);
  const [notification, setNotification] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const images = [
    'pict-1.jpeg',
    'pict-2.jpeg',
  ];
  const rating = 4;
  const [colors, setColors] = useState(['#23A6F0', '#2DC071', '#E77C40', '#252B42']);

  const { cartCount, setCartCount, wishlistCount, setWishlistCount } = useContext(CartWishlistContext);

  const handlePrevClick = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setFade(false);
    }, 300);
  };

  const handleNextClick = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setFade(false);
    }, 300);
  };

  const handleThumbnailClick = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setFade(false);
    }, 300);
  };

  const splitText = (text, maxLength = 60) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach(word => {
      if (currentLine.length + word.length + 1 <= maxLength) {
        currentLine += (currentLine.length ? ' ' : '') + word;
      } else {
        if (word.length > maxLength) {
          let splitWord = word;
          while (splitWord.length > maxLength) {
            const part = splitWord.slice(0, maxLength - 1) + '-';
            lines.push(part);
            splitWord = splitWord.slice(maxLength - 1);
          }
          currentLine = splitWord;
        } else {
          lines.push(currentLine);
          currentLine = word;
        }
      }
    });

    if (currentLine.length) {
      lines.push(currentLine);
    }

    return lines;
  };

  const description = "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.";
  const descriptionLines = splitText(description);

  const handleWishlistClick = () => {
    setIsWishlistAdded(!isWishlistAdded);
    setWishlistCount(isWishlistAdded ? wishlistCount - 1 : wishlistCount + 1);
    setNotification(isWishlistAdded ? 'Removed from wishlist' : 'Added to wishlist');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleCartClick = () => {
    setIsCartAdded(!isCartAdded);
    setCartCount(isCartAdded ? cartCount - 1 : cartCount + 1);
    setNotification(isCartAdded ? 'Removed from cart' : 'Added to cart');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => setShowNotification(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <div className="bg-[#FAFAFA] mx-4 lg:mx-32">
      <div className="p-8">
        <nav className="flex items-center justify-center md:justify-start">
          <a href="/" className="text-black font-bold">Home</a>
          <svg className="mx-2 h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span className="text-gray-500 font-bold">Shop</span>
        </nav>
      </div>
      {notification && (
        <div className={`fixed top-12 left-1/2 transform -translate-x-1/2 bg-[#23A6F0] text-white px-4 py-2 rounded shadow-lg z-50 transition-opacity duration-500 ${showNotification ? 'opacity-100' : 'opacity-0'}`}>
          {notification}
        </div>
      )}
      <div className="flex flex-col lg:flex-row items-start">
        <div className="w-full lg:w-auto">
          {/* Big Product Picture */}
          <div className="relative w-full lg:w-[35rem] h-[30rem] overflow-hidden bg-gray-200 mr-0 lg:mr-8">
            <img src={images[currentImageIndex]} alt="Product" className={`object-cover w-full h-full transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`} />
            <button onClick={handlePrevClick} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 lg:p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 lg:w-16 lg:h-16">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={handleNextClick} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 lg:p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 lg:w-16 lg:h-16">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Small Product Pictures */}
          <div className="flex space-x-2 mt-4">
            {images.map((image, index) => (
              <div key={index} className="w-20 h-20 overflow-hidden">
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-full object-cover cursor-pointer ${currentImageIndex === index ? 'opacity-50' : 'opacity-100'}`}
                  onClick={() => handleThumbnailClick(index)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Product Description */}
        <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-auto">
          {/* Name and review */}
          <div>
            <p className='text-xl my-3'>Floating Phone</p>
            <div className='flex items-center'>
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={index < rating ? "/star-1.svg" : "/star-0.svg"}
                  alt="Star"
                  className="w-5 h-5"
                />
              ))}
              <span className="ml-2 text-gray-500 text-sm font-bold">10 Reviews</span>
            </div>
          </div>
          {/* Price and Availability */}
          <div className='my-8'>
            <p className="font-bold text-2xl">$1,139.33</p>
            <p className="text-gray-500">
              <span className='text-sm font-bold'>Availability : </span><span className="text-[#23A6F0] font-bold">In Stock</span>
            </p>
          </div>
          {/* Description */}
          <div>
            {descriptionLines.map((line, index) => (
              <p key={index} className='text-[#858585] font-medium tracking-wide'>{line}</p>
            ))}
          </div>
          {/* Separator line */}
          <div className="my-8 border-t border-gray-500"></div>
          {/* Colors */}
          <div className="flex space-x-2 mb-16">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
          {/* Buy Options */}
          <div className="flex items-center mt-4">
            {/* Select Options Button */}
            <button className="bg-[#23A6F0] text-white py-3 px-5 rounded font-semibold">
              Select Options
            </button>
            {/* Icon Buttons */}
            <div className="flex ml-3 space-x-2">
              <button onClick={handleWishlistClick} className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center" style={{ backgroundColor: isWishlistAdded ? "#e84848" : "white" }}>
                <img src="/icons/wishlist.svg" alt="Wishlist" className="w-5 h-5" style={{ filter: "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)", fill: "#252B42" }}/>
              </button>
              <button onClick={handleCartClick} className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center" style={{ backgroundColor: isCartAdded ? "#79d45d" : "white" }}>
                <img src="/icons/cart.svg" alt="cart" className="w-5 h-5" style={{ filter: "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)", fill: "#252B42" }}/>
              </button>
              <button className="w-10 h-10 border border-gray-500 rounded-full bg-white flex items-center justify-center">
                <img src="/icons/eye.svg" alt="eye" className="w-5 h-5"  />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;