import Image from "next/image";
import Button from "../Button";
import ExpandableDescription from "./client/ExpandableDescription";
import { Content, Route } from "@/lib/constants";
import { ProductBody } from "@/lib/api.types";
import Link from "next/link";
import { decodeURLString } from "@/lib/helpers";

export default function ProductPage({
  data,
  title,
  blurDataURL,
  categoryName,
}: {
  data: ProductBody;
  title: string;
  blurDataURL: string;
  categoryName: string;
}) {
  return (
    <div className="md:flex gap-6 md:max-h-96 sm:basis-full sm:py-4">
      <div className="w-full relative aspect-square md:basis-1/2">
        <Image
          src={data?.image}
          fill
          alt={title}
          placeholder="blur"
          blurDataURL={blurDataURL}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="md:basis-1/2 flex flex-col gap-6 justify-start">
        <div className="flex flex-col gap-3">
          <h1 className="w-fit relative text-3xl font-semibold">
            {data?.title}
          </h1>
          <h2>
            {Content.ProductPage.CATEGORY_LABEL}:{" "}
            <Link href={`${Route.DETAILS}/${categoryName.toLowerCase()}`}>
              <Button variant="link">{decodeURLString(categoryName)}</Button>
            </Link>
          </h2>
          <p className="text-2xl relative inline w-fit font-medium after:block after:absolute after:h-1/2 after:-z-10 after:w-full after:bg-yellow-400 after:-mt-2 after:mx-2 mb-4">{Content.ProductPage.PRICE}: {data?.price}</p>
          <Button className="w-full" variant="cta">
            {Content.CategoryProductCard.ADD_TO_CART}
          </Button>
        </div>
        <ExpandableDescription
          className="leading-8"
          description={data?.description}
        />
      </div>
    </div>
  );
}
