import { ProductBody } from "@/lib/api.types";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { Content, Route } from "@/lib/constants";
import { getBlurredImagePlaceholder } from "@/lib/api.utils";
import { removeSlashes } from "@/lib/helpers";

type CategoryProductCardProps = Omit<ProductBody, "description"> & {
  categoryName: string;
};

export default async function CategoryProductCard({
  id,
  categoryName,
  title,
  image,
  price,
}: CategoryProductCardProps) {
  const blurDataURL = await getBlurredImagePlaceholder(image);
  const formattedPrice = parseInt(price).toFixed(2).replace(".", ",");

  return (
    <div
      key={title}
      className="p-4 border border-slate-400 rounded-lg flex gap-6 h-[18vh] mb-4 sm:basis-[calc((100%-2rem)/2)] lg:basis-[calc((100%-2rem)/3)]"
    >
      <Image
        src={image}
        alt={title}
        height={100}
        width={100}
        blurDataURL={blurDataURL}
        placeholder="blur"
        style={{
          objectFit: "scale-down",
        }}
      />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <p className="font-medium line-clamp-2 ">{title}</p>
          <div className="flex items-end">
            <p className="text-xl font-bold">{formattedPrice.split(",")[0]}</p>
            <p>,</p>
            <p className="text-sm">{formattedPrice.split(",")[1]}</p>
          </div>
        </div>
        <Link
          className="w-fit"
          shallow
          href={`${Route.DETAILS}/${categoryName}/${removeSlashes(title)}_${id}`}
        >
          <Button className="flex justify-between w-fit" variant="link">
            {Content.CategoryCard.GO_TO_DETAILS}
          </Button>
        </Link>
      </div>
    </div>
  );
}
