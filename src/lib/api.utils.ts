import { GetAllCategoriesBody } from "./api.types";
import { APIEndpoint, Error as ErrorConst } from "./constants";

export async function getAllCategories(): Promise<GetAllCategoriesBody> {
    const response = await fetch(APIEndpoint.CATEGORIES);

    if (!response.ok) {
        throw new Error(ErrorConst.CATEGORIES);
    }

    return response.json();
}