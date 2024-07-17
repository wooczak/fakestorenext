import { Suspense } from "react";

import { CategoriesList, DetailsSkeleton, ProductPage } from "@/components";
import { ProductBody } from "@/lib/api.types";
import { getInCategories, getProduct } from "@/lib/api.utils";
import { Error as ErrorLabel } from "@/lib/constants";
import { decodeURLString, extractProductDetailsFromURL, removeSlashes } from "@/lib/helpers";

export default async function DetailsPage({
  params,
}: {
  params: { slug: string | string[] };
}) {
  let data: ProductBody[] | ProductBody | undefined;
  let title = "";
  let categoryName = "";
  let blurDataURL = "";

  const isCategoriesPage = params.slug.length === 1;
  const isProductsPage = params.slug.length > 1;

  try {
    if (isCategoriesPage) {
      categoryName = params.slug[0];
      title = decodeURLString(categoryName);
      data = await getInCategories(categoryName);
    } else if (isProductsPage) {
      const { name, id } = extractProductDetailsFromURL(params.slug[1]);

      const { data: productData, blurDataURL: productBlurDataURL } =
        await getProduct(id, name);

      title = productData?.title;
      data = productData;
      blurDataURL = productBlurDataURL;
    }
  } catch (error) {
    console.error(error);
    throw new Error(ErrorLabel.NOT_FOUND);
  }

  return (
    <section className="flex flex-col gap-4 relative sm:flex-row sm:flex-wrap">
      {Array.isArray(data) ? (
        <CategoriesList data={data} categoryName={categoryName} title={title} />
      ) : (
        !Array.isArray(data) &&
        data && (
          <ProductPage data={data} title={title} blurDataURL={blurDataURL} />
        )
      )}
    </section>
  );
}
