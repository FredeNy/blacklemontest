"use client"
import React, { useState } from 'react';
import Organic from './organic';
import Link from 'next/link';

function Product() {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
 
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 bg-Productbg">
      <div className="md:col-span-2">
        <img src="/product.png" alt="product image" className="w-full h-full" />
      </div>
      
      <div className="p-12 md:col-span-1">
        <Link href="/" prefetch={false} className="flex items-center text-Textcolor font-light mb-16 text-sm">
          <img src="/pil.svg" alt="pil" className="w-6 h-6 mr-2 text-opacity-90" />
          <span>ALL PRODUCTS / HAIRCARE / RESTORATIVE</span>
        </Link>
        <h2 className="text-Textcolor font-medium text-3xl mb-4">RESTORATIVE HAIR MASK</h2>
        <h3 className="text-Textcolor text-opacity-90 mb-6">NUTRISHMENT IN A BOTTLE</h3>
        <div className='border-t border-Detailcolor'></div>
        <p className="text-Textcolor mb-6 font-light leading-6 mt-4 text-opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut.
        </p>
        <div className="">
          <div className="grid grid-cols-2 mt-6 mb-8">
            <Organic />
            <Organic />
          </div>
          <div className="grid grid-cols-2 mb-6">
            <Organic />
            <Organic />
          </div>
        </div>
        <form className="border-t border-Detailcolor mb-12 text-Textcolor">
          <div className="mt-6">
            <input
              className="w-6 h-6 mb-6"
              required
              type="radio"
              name="buyonce"
            />
            <span className="text-Textcolor m-2 text-opacity-90">Buy once | $38</span>
          </div>
          <div>
            <input
              className="w-6 h-6"
              required
              type="radio"
              name="subscribe"
            />
            <span className="text-Textcolor opacity-50 ml-2">Subscribe (SAVE 20%) | $30</span>
          </div>
        </form>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="w-20 p-2 border"
          />
          <button 
            className={`bg-Buttonbg text-Textcolor p-2 w-60 flex justify-center items-center ${isAddedToCart ? "bg-green-500" : ""}`} 
            onClick={handleAddToCart}
            disabled={isAddedToCart} 
          >
            {isAddedToCart ? "ADDED TO CART ✓" : "ADD TO CART"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Product;
