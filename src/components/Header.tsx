'use client';
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import logo from '../../public/images/header/logo.svg';

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (shouldOpen: boolean) => {
    setOpen(shouldOpen);
    document.body.style.overflow = shouldOpen ? 'hidden' : 'visible';
  };

  return (
    <header className="header absolute z-[3] w-full py-9 tracking-[0.0875rem]">
      <div className="container">
        <div className="flex justify-between">
          <ScrollLink to="top" smooth={true} offset={-100}>
            <Image src={logo} width={61} height={35} alt="Logo" />
          </ScrollLink>
          <div className={open ? 'menu is-open backdrop-blur-xl' : 'menu'}>
            <nav className="nav">
              <ScrollLink to="about" smooth={true} offset={-100} onClick={() => handleOpen(false)}>
                About
              </ScrollLink>
              <ScrollLink to="services" smooth={true} offset={-100} onClick={() => handleOpen(false)}>
                Services
              </ScrollLink>
              <ScrollLink to="career" smooth={true} offset={-100} onClick={() => handleOpen(false)}>
                Career
              </ScrollLink>
              <ScrollLink to="gallery" smooth={true} offset={-100} onClick={() => handleOpen(false)}>
                Gallery
              </ScrollLink>
              <ScrollLink to="contacts" smooth={true} offset={-100} onClick={() => handleOpen(false)}>
                Contacts
              </ScrollLink>
            </nav>
          </div>
          <button className="relative z-[5] uppercase md:hidden" onClick={() => handleOpen(!open)} type="button">
            {!open ? 'Menu' : 'Close'}
          </button>
        </div>
      </div>
    </header>
  );
}