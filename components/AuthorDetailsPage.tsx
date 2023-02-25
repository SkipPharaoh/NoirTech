import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "../lib/sanity.client";
import urlFor from "../lib/urlFor";
import { RichTextComponents } from "./RichTextComponents";
import LinkTo from "./core/LinkTo";

interface AuthorDetailsPageProps {
  slug: string;
}

export default async function AuthorDetailsPage({
  slug,
}: AuthorDetailsPageProps) {
  const query = groq`*[_type == "author" && slug.current == $slug][0]
    {
        ...,
    }
    `;

  const author: Author = await client.fetch(query, { slug });

  const { bio, image, name, profession, staff, socials } = author;

  const hasBio = !!bio ? (
    <PortableText value={author.bio} components={RichTextComponents} />
  ) : (
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita unde alias aspernatur nobis eaque suscipit nostrum repellendus itaque corporis, saepe voluptatem optio quaerat consequatur autem aperiam cum maxime sint?"
  );
  const hasImage = !!image ? urlFor(image).url() : "/Images/author/author1.jpg";
  const hasName = !!name ? name : "Author Name";
  const hasProfession = !!profession
    ? profession
    : "BLK Tech ODB Network Contributor";
  const hasStaff = !!staff
    ? "BLK Tech On Da Block Staff"
    : "BLK Tech On Da Block Contributor";

  if (!author) {
    notFound();
  }

  return (
    <div className="container py-6">
      <div className="AuthorCard text-center lg:text-left flex flex-col w-full pt-0 lg:pt-6 mb-6 sm:mb-12 lg:flex-row lg:justify-center">
        <div className="AuthorImage mx-auto lg:mx-0 lg:mr-6">
          <div className="relative overflow-hidden">
            <Image
              src={hasImage}
              width={240}
              height={240}
              alt={""}
              role="presentation"
              className="z-0 w-32 prerender border-2 border-solid border-gray-400 p-2 rounded-full h-32 md:w-48 md:h-48 2xl:w-64 2xl:h-64 bg-white"
            />
          </div>
        </div>
        <div className="items-center max-w-2xl">
          <div className="">
            <h1 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl mb-3 tracking-tight leading-10 font-extrabold sm:mb-5 sm:leading-none sm:max-w-4xl">
              {hasName}
            </h1>
            <p className="text-gray-600 text-base lg:text-xl mb-5">
              <strong className="uppercase">{hasStaff}</strong>
              <br />
              {hasProfession}
            </p>
          </div>
          <div className="text-left mb-6">{hasBio}</div>
          <div className="mb-6">
            {socials &&
              socials.map((social) => {
                const website =
                  social.platform === "website" ? "globe" : social.platform;

                const url =
                  social.platform === "website"
                    ? `${social.username}`
                    : `${social.platform}.com/${social.username}`;

                return (
                  <LinkTo
                    href={`https://www.${url}`}
                    key={social._key}
                    target="_blank"
                    aria-label="facebook"
                    title="facebook"
                    className="rounded-full inline-flex justify-center items-center hover:shadow-md text-gray-800 bg-gray-100 hover:bg-gray-200 mr-4 mt-6 shadow h-12 w-12 share-facebook"
                  >
                    <Image
                      src={`https://img.icons8.com/ios-filled/512/${website}.png`}
                      alt={social.platform}
                      width={20}
                      height={20}
                    />
                  </LinkTo>
                );
              })}
          </div>
        </div>
      </div>
      <div className="mb-10 border-t pt-10 border-gray-200">
        <h2 className="text-gray-800 leading-6 uppercase text-2xl md:text-3xl lg:leading-7 font-heading tracking-wide font-bold">
          {" "}
          Latest
        </h2>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-6 xl:gap-12">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </div>
  );
}

function Post() {
  return (
    <div className="flex flex-row-reverse lg:flex-col mb-6 pb-6 border-b border-gray-200 lg:mb-0 lg:pb-0 lg:border-none">
      {/* cardContainer above */}
      {/* imageContainer below */}
      <div className="flex-none block ml-6 lg:ml-0">
        <LinkTo href={"/"} className="relative block">
          <div className="relative mb-4 shadow rounded-lg lg:aspect-[3/2] aspect-[1/1] overflow-hidden">
            {/* imageWidth */}
            {/* imageHeight */}
            <Image
              src={"/images/img1.jpg"}
              alt=""
              className="z-0 w-full hover:drop-shadow-md transition ease-in-out duration-150 cursor-pointer lazyloaded"
              fill
              sizes="(max-width: 600px) 100vw, 600px"
            />
          </div>
        </LinkTo>
      </div>

      {/* cardBody */}
      <div className="flex flex-col flex-grow flex-1">
        {/* categoryContainer */}
        <div className="cat">
          <LinkTo
            href={"/"}
            className="text-orange-600 hover:text-orange-800 flex items-center hover:underline uppercase font-semibold tracking-widest leading-none text-xs lg:text-sm pb-2"
          >
            {/* category */}
            <p>Business, Travel</p>
          </LinkTo>
        </div>

        {/* title */}
        <div className="tracking-[-0.0375em] leading-6 font-semibold lg:leading-7 text-gray-800 hover:underline text-xl lg:text-2xl pb-2">
          <LinkTo
            href={"/"}
            className="title text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            Your most unhappy customers are your greatest source of learning
          </LinkTo>
        </div>

        {/* author */}
        {/* <Author /> */}
      </div>
    </div>
  );
}
