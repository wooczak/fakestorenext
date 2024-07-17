import Divider from "@/components/Divider";
import CategoryCard from "@/components/main-page/CategoryCard";
import { getAllCategories } from "@/lib/api.utils";
import { Content } from "@/lib/constants";

export default async function Home() {
  const allCategories = await getAllCategories();

  const { ALL_CATEGORIES, TITLE, SUBTITLE } = Content.MainPage;

  return (
    <main>
      <section className="flex flex-col gap-6 ">
        <h1 className="text-3xl font-extrabold md:text-4xl">{TITLE}</h1>
        <h2 className="text-md text-slate-500 md:text-lg">{SUBTITLE}</h2>
      </section>
      <Divider />
      <section className="flex flex-col gap-6">
        <h1 className="w-fit text-2xl font-bold relative after:block after:absolute after:h-1/2 after:-z-10 after:w-full after:bg-yellow-400 after:-mt-2 after:mx-2">
          {ALL_CATEGORIES}
        </h1>
        <div className="my-3 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:flex-auto">
          {allCategories?.map((category, index) => (
            <CategoryCard categoryName={category} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
