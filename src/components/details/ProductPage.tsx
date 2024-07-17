import Image from "next/image";
import Button from "../Button";
import ExpandableDescription from "./client/ExpandableDescription";
import { Content } from "@/lib/constants";
import { ProductBody } from "@/lib/api.types";

export default function ProductPage({
  data,
  title,
  blurDataURL,
}: {
  data: ProductBody;
  title: string;
  blurDataURL: string;
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
      <div className="md:basis-1/2 md:flex md:flex-col md:justify-start">
        <div>
          <h1 className="w-fit my-6 relative text-3xl font-semibold">
            {data?.title}
          </h1>
          <Button className="w-full mb-6" variant="cta">
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
