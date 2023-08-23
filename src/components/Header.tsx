'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../../public/images/header/logo.svg'

export default function Header() {
	const [open, setOpen] = useState<boolean>(false);
	
	const handleOpen = () => {
		setOpen(!open);
		document.body.style.overflow = !open ? 'hidden' : 'visible';
	};
  
	return (
		<header className="header absolute z-[3] w-full py-9 tracking-[0.0875rem]">
			<div className="container">
				<div className="flex justify-between">
					<Link href="./">
						<Image src={logo} width={61} height={35} alt="Logo" />
					</Link>
					<div className={open ? 'menu is-open backdrop-blur-xl' : 'menu'}>
						<nav className="nav">
							<Link href="#to-about">About</Link>
							<Link href="#to-services">Services</Link>
							<Link href="#to-career">Career</Link>
							<Link href="#to-gallery">Gallery</Link>
							<Link href="#to-contact">Contacts</Link>
						</nav>
					</div>
					<button className="relative z-[5] uppercase md:hidden" onClick={handleOpen} type="button">
						{!open ? 'Menu' : 'Close'}
					</button>
				</div>
			</div>
		</header>
	);
}