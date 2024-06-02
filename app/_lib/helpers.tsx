import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Courses",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "books",
    name: "Books",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Products",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
  {
    route: "services",
    name: "Services",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
];

export const priceGvn = (price: number): string =>
  (price / 100)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" $");

export const declOfNum = (
  number: number,
  titles: [string, string, string]
): string => {
  const cases = [2, 0, 1, 1, 1, 2];

  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};
