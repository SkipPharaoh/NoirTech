import LinkTo from "./core/LinkTo";

interface CategoriesSectionProps {
  categoryInfo: Category[];
}

export default function CategoriesSection({
  categoryInfo,
}: CategoriesSectionProps) {
  const CategoryInfo = categoryInfo.map((category) => {
    const bg = {
      background: `url('/images/categories/${category.slug.current}.png') no-repeat`,
      maxWidth: "100%",
      height: "auto",
      width: "auto",
      objectfit: "contain",
      backgroundPosition: "top",
    };

    return (
      <div key={category._id}>
        <LinkTo
          href={{
            pathname: `/categories/${category.slug.current}`,
            query: { search: category.title },
          }}
          as={`/categories/${category.slug.current}`}
        >
          <div
            className="p-20 m-2 text-center border-black border-solid border-2"
            style={bg}
          >
            <h1 className="text-black font-extrabold text-xl m-2 bg-white">
              {category.title}
            </h1>
          </div>
        </LinkTo>
      </div>
    );
  });

  return (
    <section className="container mx-auto pt-16">
      <div>
        <h1 className="font-bold text-4xl pb-12 text-center text-shadow">
          Browse By Category
        </h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 sm:grid-flow-row place-content-center">
          {CategoryInfo}
        </div>
      </div>
    </section>
  );
}
