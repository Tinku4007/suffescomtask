'use client'
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../../assests/Image/logo.png';
import Image from 'next/image';
import Button from '../atoms/Button/Button';
import Images from '@/constant/Images';

const Header = () => {
  const [cartCount, setCartCount] = useState(2); // Initial cart count

  return (
    <header className="bg-white sticky top-0 z-[99999]">
      <div className='container mx-auto'>
        <div className='flex items-center justify-between px-4 py-3 md:px-8 md:py-4'>
          <div className="flex items-center space-x-2">
            <Link legacyBehavior href="/">
              <a className="text-xl md:text-2xl font-bold">
                <Image
                  src={logo}
                  alt="Seared steak dish"
                  width={150}
                  height={''}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </a>
            </Link>
            {/* <p className="hidden sm:inline-block text-xs md:text-sm text-gray-500">
          your <span className="text-indigo-600 font-semibold">macros</span>, your way
        </p> */}
          </div>

          <nav className="flex items-center gap-[53px]">
            <div className='hidden md:flex space-x-4 lg:space-x-[35px] text-[#828282] font-medium text-sm'>
              <Link legacyBehavior href="/desktop/recipe_generation">
                <a className="hover:text-indigo-600">Recipe Generation</a>
              </Link>
              <Link legacyBehavior href="/desktop/calculate_your_macros">
                <a className="hover:text-indigo-600">Calculate your Macros</a>
              </Link>
              <Link legacyBehavior href="/desktop/how-it-works">
                <a className="hover:text-indigo-600">How It Works</a>
              </Link>
            </div>
            <div className="flex items-center space-x-3 md:space-x-[32px]">
              <button className="text-gray-600 hover:text-indigo-600 text-lg">
                <Image
                  src={Images.search_img}
                  alt="Seared steak dish"
                  width={30}
                  height={''}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </button>
              <button className="text-gray-600 hover:text-indigo-600 text-lg">
                <Image
                  src={Images.avatar_img}
                  alt="Seared steak dish"
                  width={30}
                  height={''}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </button>
              <div className="relative">
                <span className="text-gray-600 hover:text-indigo-600 text-lg">
                  <Image
                    src={Images.cart_img}
                    alt="Seared steak dish"
                    width={30}
                    height={''}
                    objectFit="cover"
                    className="rounded-lg"
                  /></span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
