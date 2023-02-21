import React from "react";
import AuthorDetailsPage from "../../../../components/AuthorDetailsPage";
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type == "author"]
    {
        slug,
    }`;

  const slugs: Author[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default function page({ params: { slug } }: Props) {
  const AuthorDetails = (<AuthorDetailsPage slug={slug} />) as JSX.Element;

  return <>{AuthorDetails}</>;
}
