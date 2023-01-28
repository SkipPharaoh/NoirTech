import React from "react";

export default function BlogSubscription() {
  return (
    <div className="sm:px-12 px-4 bg-[#ffffff19] py-7">
      <h1 className="text-3xl mb-4 font-semibold text-center">
        <span className="text-teal-400">Subscribe</span> to our blog!
      </h1>
      <div>
        <input
          type="text"
          placeholder="Enter Your Email"
          className="text-gray-800 text-center
            w-full mr-1 mb-4 py-2.5 rounded px-2 focus:outline-none border-2 border-black"
        />
        <button
          className="bg-teal-400 hover:bg-teal-500 duration-300 py-2.5 font-[Poppins]
           rounded-md text-white w-full"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
