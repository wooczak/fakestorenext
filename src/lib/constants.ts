export const MAIN_URI = "https://fakestoreapi.com";

export const APIEndpoint = {
  CATEGORY: `${MAIN_URI}/products/category`,
  CATEGORIES: `${MAIN_URI}/products/categories`,
  PRODUCT: `${MAIN_URI}/products`,
} as const;

export const Error = {
  CATEGORY: (categoryName: string) =>
    `Oops! We were unable to fetch ${categoryName} data. Please go back to homepage and try again later.`,
  CATEGORIES:
    "Oops! We were unable to fetch categories data. Please try again later.",
  PRODUCT: (productName: string) =>
    `Oops! We were unable to fetch details about ${productName}. Please go back to homepage and try again later.`,
  NOT_FOUND: 'Oops! Looks like we cannot find the page you are looking for. Please go back to homepage and try again later.'
};

export const Route = {
  FAVORITES: "/favorites",
  CART: "/cart",
  HOME: "/",
  DETAILS: "/details",
} as const;

export const Content = {
  MainPage: {
    ALL_CATEGORIES: "All available categories",
    SEE_PRODUCTS: "See products",
    TITLE: "Welcome to the app!",
    SUBTITLE: "Check out all the products we've added!",
  },
  CategoryCard: {
    GO_TO_DETAILS: "Go to details"
  },
  CategoryProductCard: {
    Description: {
      SEE_MORE: "Expand description",
      HIDE: "Shrink description"
    },
    ADD_TO_CART: "Add to cart"
  },
  Error: {
    GO_TO_HOMEPAGE: "Go back to homepage",
  },
  Navigation: {
    GO_BACK: "Go back"
  }
};
