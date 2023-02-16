import Link from "next/link";
import Image from "next/image";
import Author from "./Author";

export default function RelatedBlog() {
  return (
    <section>
      <h1 className="font-bold text-3xl pb-10">Related</h1>

      <div className="flex flex-col gap-10">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="flex gap-5">
      {/* cardContainer above */}
      {/* imageContainer below */}
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          {/* imageWidth */}
          {/* imageHeight */}
          <Image
            src={"/images/img1.jpg"}
            alt=""
            // className="rounded"
            width={300}
            height={200}
          />
        </Link>
      </div>

      {/* cardBody */}
      <div className="info flex justify-center flex-col">
        {/* categoryContainer */}
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            {/* category */}
            <p>Business, Travel</p>
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            - July 3, 2022
          </Link>
        </div>

        {/* title */}
        <div className="title">
          <Link
            href={"/"}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            Your most unhappy customers are your greatest source of learning
          </Link>
        </div>

        {/* author */}
        <Author />
      </div>
    </div>
  );
}
