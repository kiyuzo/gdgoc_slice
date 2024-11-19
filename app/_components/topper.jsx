import React from 'react';

const Topper = () => {
  return (
    <div className='bg-[#23856D] text-[#FFFFFF] hidden md:block'>
      <ul className='flex xl:space-x-16 space-x-8 justify-center items-center p-5'>
        <li className='flex items-center font-light text-xs md:text-sm lg:text-lg'>
            <img src="/icons/telephone.svg" alt="telephone" className='w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5 mx-1 lg:mx-2' />
            (225) 555-0118
        </li>
        <li className='flex items-center font-light text-xs md:text-sm lg:text-lg'>
            <img src="/icons/email.svg" alt="email" className='w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5 mx-1 lg:mx-2' />
            <p>michelle.rivera@example.com</p>
        </li>
        <li className='text-xs sm:text-sm md:text-sm lg:text-lg font-bold'>Follow Us and get a chance to win 80% off</li>
        <li className='flex items-center text-xs md:text-sm lg:text-lg'>
            Follow Us : 
            <div className='flex items-center'>
            <img src="/icons/instagram.svg" alt="instagram" className='w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5 mx-1 lg:mx-2' />
            <img src="/icons/youtube.svg" alt="youtube" className='w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5 mx-1 lg:mx-2'/>
            <img src="/icons/facebook.svg" alt="facebook" className='w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5 mx-1 lg:mx-2'/>
            <img src="/icons/twitter.svg" alt="twitter" className='w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5 mx-1 lg:mx-2'/>
            </div>
        </li>
      </ul>
    </div>
  );
};

export default Topper;