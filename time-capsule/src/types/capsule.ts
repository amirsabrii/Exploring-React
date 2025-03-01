import { Category } from "./category.ts";

export type Capsule = {
  id: string | number;
  title: string;
  date: Date;
  describtion: string;
  category: Category;
};
