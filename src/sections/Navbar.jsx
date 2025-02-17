import React, { useEffect, useRef } from 'react'
import Button from './Button.jsx';
import { TiLocationArrow } from 'react-icons/ti';
import gsap from 'gsap';
import { useState } from 'react';
import { useWindowScroll } from 'react-use';

const navItems = ['Nexus','Vault','Prologue','About','Contact'];

const Navbar = () => {
const navContainerRef = useRef(null);

const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);
  return (
    <div ref = {navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all
    duration-700 sm:inset-x-6'>
        <header className=' absolute top-1/2 w-full
        -translate-y-1/2'>
            <nav className='flex justify-between size-full items-center
            p-4'>
                <div className='flex items-center gap-2'>
                    <img src="/img/logo.png" alt="logo-img"  className='w-20 h-12 rounded-full border-2 border-white  '/>
                    <Button
                    id=" product-button"
                    title="Products"
                    rightIcon={<TiLocationArrow/>}
                    containerClass=" bg-blue-50 md:flex item-center justify-center
                    gap-1"/>
                </div>
                <div className='flex h-full items-center '>
                    <div className='hidden md:block'>
                        {navItems.map((item) => (
                            <a  key={item} className='nav-hover-btn' href={`#${item.toLowerCase()}`}>
                               {item} 
                            </a>
                        ))}
                    </div>

                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar