"use client";

import { headerLinks } from "@/app/constants";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 md:top-5 left-0 right-0 flex justify-between items-center px-7 py-2 md:p-8 bg-white md:w-[calc(100%-40px)] mx-auto z-50">
      <button className="flex order-1 md:order-2 justify-center items-center py-1 px-3 gap-8 md:ap-4 bg-white border-2">
        Contact us
        <Image src="/icons/arrow.svg" alt="Contact Us" width={18} height={14} />
      </button>

        <div className="md:hidden ml-auto order-2 md:order-1">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                <Image src="/icons/hamburger.svg" alt="Menu" width={48} height={48} />
            </button>
        </div>

        <nav className={`absolute top-full left-0 right-0 bg-white shadow-lg md:static md:flex md:bg-transparent md:shadow-none ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row items-center gap-5 p-5 md:p-2">
                {headerLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={`/${link}`} className="text-sm text-gray-800 hover:text-gray-600">
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  );
};
export default Header;
