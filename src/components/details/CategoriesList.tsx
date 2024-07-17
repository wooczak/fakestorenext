import { ProductBody } from "@/lib/api.types";
import CategoryProductCard from "./CategoryProductCard";

export default function CategoriesList({
  categoryName,
  data,
  title,
  totalCount
}: {
  categoryName: string;
  data: ProductBody[];
  title: string;
  totalCount: number | null;
}) {
  return (
    <>
      <h1 className="sm:basis-full w-fit relative text-3xl font-bold mb-6 mt-4 after:block after:absolute after:h-1/2 after:-z-10 after:w-full after:bg-yellow-400 after:-mt-2 after:mx-2">
        {`${title} (${totalCount})`}
      </h1>
      {data?.map((item) => (
        <CategoryProductCard
          title={item.title}
          id={item.id}
          key={item.id}
          image={item.image}
          price={item.price}
          categoryName={categoryName}
        />
      ))}
    </>
  );
}
