"use client";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../public/favicon.ico";

export default function Header() {
  const [openNav, setOpenNav] = useState<boolean>(true);

  const handleOnClickNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <header className="flex items-center justify-between font-bold px-10 py-5">
      <div>
        <Link className="flex items-center space-x-2" href="/">
          <Image
            src={Logo}
            width={50}
            height={50}
            alt="Logo"
            className="rounded-full"
          />
          <h1 className="text-4xl">BLK Hood Tech</h1>
        </Link>
      </div>
      {/* TODO: convert below too a menu  */}
      <div>
        <ul className="hidden sm:flex">
          <li className="p-2">Categories</li>
          <li className="p-2">Company</li>
          <li className="p-2">Support</li>
          <li className="p-2">Legal</li>
        </ul>
      </div>
      {/* Mobile button */}
      <div
        className={`sm:hidden block z-20 h-10 w-10 ${
          openNav ? "text-black" : "text-white"
        } cursor-pointer ease-in duration-300`}
        onClick={handleOnClickNav}
      >
        {openNav ? <Bars2Icon /> : <XMarkIcon />}
      </div>

      {/* Mobile Nav */}
      <div
        className={`sm:hidden absolute top-0 ${
          openNav ? "left-[-100%]" : "left-0"
        } right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white z-10`}
      >
        <ul>
          <li className="p-4 text-4xl hover:text-gray-500">
            <Link href="#">Categories</Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-500">
            <Link href="#">Company</Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-500">
            <Link href="#">Support</Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-500">
            <Link href="#">Legal</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
