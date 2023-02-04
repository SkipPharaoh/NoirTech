import Author from "./Author";
import Link from "next/link";
import Image from "next/image";

interface CategoriesSectionProps {
  categoryInfo: Category[];
}

export default function CategoriesSection({
  categoryInfo,
}: CategoriesSectionProps) {
  const CategoryInfo = categoryInfo.map((category) => {
    return (
      <div className="p-20 m-2 text-center bg-gray-300 border-black border-solid border-2">
        <h1 className="">{category.title}</h1>

        {/* <p>{category.description}</p> */}
      </div>
    );
  });

  return (
    <section className="container mx-auto py-16">
      <div>
        <h1 className="font-bold text-4xl pb-12 text-center">
          Browse By Category
        </h1>

        <div className="grid md:grid-cols-3 auto-cols-max sm:grid-flow-row place-content-center">
          {CategoryInfo}
        </div>
      </div>
    </section>
  );
}
