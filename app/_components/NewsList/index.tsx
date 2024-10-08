import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { News } from "@/app/_libs/microcms";
import { CategoryView } from "@/app/_components/category";
import { Date } from "@/app/_components/Date";

type Props = {
  news: News[];
};

export const NewsList = ({ news }: Props) => {
  if (news.length === 0) {
    return <p>記事がありません</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.item}>
          <Link href={"/news/${article.id}"} className={styles.link}>
            <Image
              className={styles.image}
              src="/no-image.png"
              alt="No Image"
              width={1200}
              height={630}
            />
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <CategoryView category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
};
