import React from "react";
import FooterItemsContainer from "./FooterItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "../lib/FooterMenus";

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5 text-center"
        >
          <span className="text-teal-400">Free</span> until you're ready to
          launch
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="text-gray-800 text-center
            w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none border-2 border-black md:w-auto"
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Request Code
          </button>
        </div>
      </div>
      <div className="text-center">
        <FooterItemsContainer />
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-3
      text-center pt-2 text-black text-sm pb-8"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
}
