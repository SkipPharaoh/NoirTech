import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import Divider from "../../../../components/Divider";
import RelatedBlog from "../../../../components/RelatedBlog";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import Route from "../../../../components/core/Route";
import ShareButton from "../../../../components/core/ShareButton";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Post({ params: { slug } }: Props) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->,
    }
    `;

  const post: Post = await client.fetch(query, { slug });

  if (!post) {
    notFound();
  }

  const incrementPostViews = async () => {
    await client
      .patch(post._id)
      .inc({ views: 1 })
      .commit()
      .then(() => {
        console.log("Views incremented");
      })
      .catch((error) => {
        console.log("Views not incremented");
      });
  };

  // incrementPostViews();

  return (
    <div className="w-full bg-white">
      <div className="container">
        <article className="max-w-3xl mx-auto mb-16">
          <div className="mt-6 mb-6 lg:mb-12">
            <h1 className="tracking-tight font-extrabold text-gray-900 sm:leading-none text-3xl mb-4 md:text-5xl">
              {post.title}
            </h1>
            <p className="leading-6 tracking-[-0.0125em] block text-gray-500 text-lg mb-6 lg:text-xl">
              {post.description}
            </p>
            <div className="flex-none my-4">
              <div className="flex items-center justify-between md:text-left">
                <div className="flex items-center">
                  <div className="inline-flex mr-3 h-12 w-12 rounded-full drop-shadow">
                    <div className=" relative  overflow-hidden ">
                      <Route push={`/author/${post.author.slug.current}`}>
                        <Image
                          src={
                            (post.author.image &&
                              urlFor(post.author.image).url()) ??
                            "/Images/author/author1.jpg"
                          }
                          alt={post.author.name}
                          width={50}
                          height={50}
                          className="z-0  h-12 w-12 rounded-full drop-shadow hover:drop-shadow-md transition ease-in-out duration-150 cursor-pointer ls-is-cached lazyloaded"
                        />
                      </Route>
                    </div>
                  </div>
                  <div className="font-normal uppercase text-sm tracking-wider text-gray-800 flex">
                    <p>BY&nbsp;</p>
                    <p className="hover:underline uppercase font-semibold tracking-wider text-blue-600">
                      <Route push={`/author/${post.author.slug.current}`}>
                        {post.author.name}
                      </Route>
                    </p>
                    &nbsp;•&nbsp;
                  </div>
                  <h1 className="text-gray-400">
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </h1>
                </div>

                <div className="items-center hidden sm:flex">
                  <ShareButton title={true} />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mb-6">
            <div className="relative aspect-[16/9] overflow-hidden">
              <picture>
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  width={675}
                  height={380}
                  className="z-0 w-full false rounded-lg shadow mx-auto mainheroimage"
                />
              </picture>
            </div>
          </div>

          <div className="first-letter:float-left first-letter:text-8xl first-letter:pr-1 first-letter:-mt-4 first-letter:font-black first-letter:text-gray-500 prose prose-blue max-w-3xl text-lg leading-relaxed prose-blockquote:border-l-8 prose-blockquote:border-purple-700 prose-blockquote:pl-6 prose-blockquote:text-gray-800 prose-blockquote:leading-normal prose-blockquote:font-black prose-blockquote:text-2xl prose-blockquote:md:text-3xl prose-blockquote:lg:leading-7 prose-blockquote:font-heading prose-blockquote:tracking-wide">
            <PortableText value={post.body} components={RichTextComponents} />
          </div>
        </article>

        <Divider className="max-w-3xl mx-auto mb-16" />

        <div className="flex justify-center max-w-3xl mx-auto mb-10">
          <RelatedBlog category={post.categories[0].title} />
        </div>
      </div>
    </div>
  );
}
