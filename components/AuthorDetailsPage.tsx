import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "../lib/sanity.client";
import urlFor from "../lib/urlFor";
import AuthorRelatedPost from "./AuthorRelatedPost";
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
        {/* @ts-expect-error Server Component */}
        <AuthorRelatedPost author={name} />
      </div>
    </div>
  );
}
