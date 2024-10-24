import styles from "./index.module.css";
import Image from "next/image";
import { formatDate } from "@/app/_libs/utils";

type Props = {
  date: string;
};

export const Date = ({ date }: Props) => {
  return (
    <span className={styles.date}>
      <Image src="/clock.svg" alt="" width={16} height={16} priority />
      {formatDate(date)}
    </span>
  );
};
