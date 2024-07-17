import { Content, Route } from "@/lib/constants";
import { firstCharUpperCase } from "@/lib/helpers";
import Link from "next/link";
import Button from "../Button";

export default function CategoryCard({
  categoryName,
}: {
  categoryName: string;
}) {
  return (
    <div className="flex flex-col sm:basis-[calc((100%-2rem)/3)] justify-center gap-7 border border-yellow-400 shadow-lg py-7 px-4 rounded-lg text-center">
      <p className="font-bold text-xl">{firstCharUpperCase(categoryName)}</p>
      <Link href={`${Route.DETAILS}/${categoryName}`}>
        <Button className="w-fit" variant="cta">{Content.MainPage.SEE_PRODUCTS}</Button>
      </Link>
    </div>
  );
}
