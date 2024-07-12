import Category from "@/components/main-page/Category";
import { getAllCategories } from "@/lib/api.utils";

export default async function Home() {
  const allCategories = await getAllCategories();

  return (
    <main>
      <section className="flex flex-col gap-3">
        <h1 className="text-3xl font-extrabold">Welcome to IMPACT Next.js App!</h1>
        <h2 className="text-md text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      </section>
      <span className="w-full block h-[1px] bg-slate-400 my-4" />
      <section>
        <h1 className="text-lg font-bold">All available categories</h1>
        <div className="my-3 flex flex-col gap-4">
        {allCategories?.map((category, index) => <Category categoryName={category} key={index} />)}
        </div>
      </section>
    </main>
  );
}
