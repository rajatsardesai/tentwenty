"use client";

import { headerLinks } from "@/app/constants";
import Link from "next/link";
import Image from "next/image";
import {useCallback, useState} from "react";

const NavLinks = () => (
    <ul className="nav-list">
        {headerLinks.map((link, index) => (
            <li key={index}>
                <Link href={`/${link}`} className="text-sm text-gray-800 hover:text-gray-600">
                    {link}
                </Link>
            </li>
        ))}
    </ul>
)

const MobileMenuButton = ({toggleMenu}:{toggleMenu:()=>void}) => (
    <button onClick={toggleMenu} className="p-2" aria-label="Toggle menu">
        <Image src="/icons/hamburger.svg" alt="Open navigation menu" width={48} height={48} />
    </button>
)

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = useCallback(()=>setIsOpen((prev) => !prev), []);

  return (
    <header className="header">
      <button className="header-button" aria-label="Contact us">
        Contact us
        <Image src="/icons/arrow.svg" alt="Contact Us Arrow" width={18} height={14} />
      </button>

        <div className="md:hidden ml-auto order-2 md:order-1">
            <MobileMenuButton toggleMenu={toggleMenu}/>
        </div>

        <nav className={`nav-container md:flex ${isOpen ? "block" : "hidden"}`}>
            <NavLinks/>
        </nav>
    </header>
  );
};
export default Header;
