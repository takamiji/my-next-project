import styles from "./index.module.css";
import { Category } from "@/app/_libs/microcms";

type Props = {
  category: Category;
};

export const CategoryView = ({ category }: Props) => {
  return <span className={styles.tag}>{category.name}</span>;
};
