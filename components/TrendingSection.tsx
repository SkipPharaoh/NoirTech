"use client";

import Image from "next/image";
import Link from "next/link";
import Author from "./ChildComponents/Author";

export default function TrendingSection() {
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        {Slide()}
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <Image src={"/Images/img1.jpg"} alt="" width={600} height={600} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col px-6">
        <div className="category flex flex-col">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            Business, Travel
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            July 3, 2022
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
          >
            Your most happiest customers are your responsibility
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at
          corrupti, dolor aspernatur distinctio laudantium sed odit nisi ipsum
          commodi exercitationem fugit veritatis deleniti, cum veniam quibusdam
          molestias voluptate? Amet?
        </p>
        <Author />
      </div>
    </div>
  );
}
