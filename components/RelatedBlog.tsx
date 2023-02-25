import Image from "next/image";
import Author from "./Author";
import LinkTo from "./core/LinkTo";

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
        <LinkTo href={"/"}>
          {/* imageWidth */}
          {/* imageHeight */}
          <Image
            src={"/images/img1.jpg"}
            alt=""
            // className="rounded"
            width={300}
            height={200}
          />
        </LinkTo>
      </div>

      {/* cardBody */}
      <div className="info flex justify-center flex-col">
        {/* categoryContainer */}
        <div className="cat">
          <LinkTo href={"/"} className="text-orange-600 hover:text-orange-800">
            {/* category */}
            <p>Business, Travel</p>
          </LinkTo>
          <LinkTo href={"/"} className="text-gray-800 hover:text-gray-600">
            - July 3, 2022
          </LinkTo>
        </div>

        {/* title */}
        <div className="title">
          <LinkTo
            href={"/"}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            Your most unhappy customers are your greatest source of learning
          </LinkTo>
        </div>

        {/* author */}
        <Author />
      </div>
    </div>
  );
}
