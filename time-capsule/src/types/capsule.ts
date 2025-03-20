import { Category } from "./category.ts";

export type Capsule = {
  id: string | number;
  title: string;
  date: string;
  description: string;
  category: Category;
};
