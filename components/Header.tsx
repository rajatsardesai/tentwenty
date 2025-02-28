import { headerLinks } from "@/app/constants";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-5 left-0 right-0 flex justify-between items-center p-5 bg-white w-[calc(100%-40px)] mx-auto">
      <ul className="flex flex-row items-center gap-8">
        {headerLinks.map((link, index) => (
          <li key={index}>
            <Link href={`/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>

      <button className="flex justify-center items-center p-3 gap-3 bg-white border-2">
        Contact us
        <Image src="/icons/arrow.svg" alt="Contact Us" width={18} height={14} />
      </button>
    </header>
  );
};
export default Header;
