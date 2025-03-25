import { ReactNode } from "react";

import AttractionListItem from "../AttractionsListItem/AttractionListItem.tsx";

import { Attraction } from "../../type/attraction.ts";

import styles from "./AttractionsList.module.css";

type Props = {
  attractios: Attraction[];
};

function AttractionsList({ attractios }: Props): ReactNode {
  return (
    <ul className={styles["acttraction-list"]}>
      {attractios.map((item) => (
        <AttractionListItem key={item.id} item={item}/>
      ))}
    </ul>
  );
}

export default AttractionsList;
