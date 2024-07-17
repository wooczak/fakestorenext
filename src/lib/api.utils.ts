import { GetAllCategoriesBody, ProductBody } from "./api.types";
import { APIEndpoint, Error as ErrorConst } from "./constants";
import { getPlaiceholder } from "plaiceholder";

export async function getAllCategories(): Promise<GetAllCategoriesBody> {
  const response = await fetch(APIEndpoint.CATEGORIES);

  if (!response.ok) {
    throw new Error(ErrorConst.CATEGORIES);
  }

  return response.json();
}

export async function getInCategories(
  categoryName: string
): Promise<ProductBody[]> {
  const response = await fetch(`${APIEndpoint.CATEGORY}/${categoryName}`);

  if (!response.ok) {
    throw new Error(ErrorConst.CATEGORY(decodeURI(categoryName)));
  }

  return response.json();
}

export async function getBlurredImagePlaceholder(src: string): Promise<string> {
  const imageAsPromise = await fetch(src);
  const imageAsBuffer = Buffer.from(await imageAsPromise.arrayBuffer());
  const { base64: blurPlaceholder } = await getPlaiceholder(imageAsBuffer);

  return blurPlaceholder;
}

export async function getProduct(
  productId: number,
  productName: string
): Promise<{ data: ProductBody; blurDataURL: string }> {
  const response = await fetch(`${APIEndpoint.PRODUCT}/${productId}`);

  if (!response.ok) {
    throw new Error(ErrorConst.PRODUCT(decodeURI(productName)));
  }

  const data: ProductBody = await response.json();
  const blurDataURL = await getBlurredImagePlaceholder(data?.image)

  return { data, blurDataURL };
}
