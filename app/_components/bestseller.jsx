"use client"

import React, { useEffect, useState, useRef } from 'react';

const Bestseller = () => {
  const [scrolled, setScrolled] = useState(false);
  const productRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    productRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      productRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const products = [
    {
      id: 1,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "kaiikai.jpg",
    },
    {
      id: 2,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "kaiikai.jpg",
    },
    {
      id: 3,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "kaiikai.jpg",
    },
    {
      id: 4,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "kaiikai.jpg",
    },
    {
      id: 5,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "kaiikai.jpg",
    },
    {
      id: 6,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "kaiikai.jpg",
    },
    {
      id: 7,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "kaiikai.jpg",
    },
    {
      id: 8,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "kaiikai.jpg",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] px-4 py-12 lg:px-32 lg:mx-16">
      <h1 className="font-bold text-2xl mb-8 text-center lg:text-left">BESTSELLER PRODUCTS</h1>
      <span className="block border-t border-gray-300 my-8"></span>
      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (productRefs.current[index] = el)}
            className={`product-card bg-white shadow-md overflow-hidden w-full sm:w-[240px] mx-auto transform transition-transform duration-300 opacity-0 ${scrolled ? 'hover:scale-105' : ''}`}
          >
            <div className="h-[280px] flex items-center justify-center overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg text-gray-800">
                {product.title}
              </h2>
              <p className="text-gray-500">{product.department}</p>
              <div className="mt-2 flex items-center">
                <span className="line-through text-gray-400 mr-2">
                  {product.originalPrice}
                </span>
                <span className="text-green-500 font-bold">
                  {product.discountedPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestseller;