import ClientSideRoute from "./ClientSideRoute";

interface CategoriesSectionProps {
  categoryInfo: Category[];
}

export default function CategoriesSection({
  categoryInfo,
}: CategoriesSectionProps) {
  const CategoryInfo = categoryInfo.map((category) => {
    return (
      <div key={category._id}>
        <ClientSideRoute
          route={{
            pathname: `/${category.slug.current}`,
            query: { search: category.title },
          }}
        >
          <div className="p-20 m-2 text-center bg-gray-300 border-black border-solid border-2">
            <h1 className="">{category.title}</h1>

            {/* <p>{category.description}</p> */}
          </div>
        </ClientSideRoute>
      </div>
    );
  });

  return (
    <section className="container mx-auto pt-16">
      <div>
        <h1 className="font-bold text-4xl pb-12 text-center">
          Browse By Category
        </h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 sm:grid-flow-row place-content-center">
          {CategoryInfo}
        </div>
      </div>
    </section>
  );
}
