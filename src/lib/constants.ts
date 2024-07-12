export const MAIN_URI = "https://fakestoreapi.com";

export const APIEndpoint = {
  CATEGORIES: `${MAIN_URI}/products/categories`,
} as const;

export const Error = {
  CATEGORIES:
    "Oops! Something went wrong with fetching the Categories data. Please try again.",
};

export const Route = {
  FAVORITES: '/favorites',
  HOME: "/",
  CATEGORY: "/category",
} as const;
