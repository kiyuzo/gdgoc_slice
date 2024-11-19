"use client"

import React, { createContext, useState } from 'react';

export const CartWishlistContext = createContext();

export const CartWishlistProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  return (
    <CartWishlistContext.Provider value={{ cartCount, setCartCount, wishlistCount, setWishlistCount }}>
      {children}
    </CartWishlistContext.Provider>
  );
};