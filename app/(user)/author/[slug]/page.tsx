import useContentQuery from "@/components/hooks/useContentQuery";
import type { Metadata } from "next";
import { groq } from "next-sanity";
import AuthorDetailsPage from "../../../../components/AuthorDetailsPage";
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

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { getAuthorData } = useContentQuery();

  const author = await getAuthorData(slug);

  return {
    metadataBase: new URL("https://www.noirtechtribe.com"),
    title: `${author.name} - ${author.profession}`,
    description: author.profession,
    openGraph: {
      title: `${author.name} | Noir Tech Tribe`,
      description: author.profession,
      url: `https://www.noirtechtribe.com/posts/${slug}`,
      images: [
        {
          url: `${author.image}`,
          width: 1200,
          height: 630,
          alt: `${author.name}`,
        },
      ],
    },
  };
}

export default function page({ params: { slug } }: Props) {
  const AuthorDetails = (
    /* @ts-expect-error Server Component */
    <AuthorDetailsPage slug={slug} key={slug} />
  ) as JSX.Element;

  return <>{AuthorDetails}</>;
}
