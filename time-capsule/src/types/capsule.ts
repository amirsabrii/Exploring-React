import { Category } from "./category.ts";

export type Capsule = {
  id: string | number;
  title: string;
  date: Date;
  description: string;
  category: Category;
};
