import { ReactNode, useContext } from "react";

import AttractionListItem from "../AttractionsListItem/AttractionListItem.tsx";

import { fetchAttractions } from "../../api/fetch-attractions.ts";

import { FiltersContext } from "../../context/FilterContext.ts";

import { useQuery } from "@tanstack/react-query";

import styles from "./AttractionsList.module.css";

function AttractionsList(): ReactNode {
  const { filter } = useContext(FiltersContext);

  const { data } = useQuery({
    queryKey: ["attraction", filter],
    queryFn: () => fetchAttractions(filter),
    initialData: [],
  });

  return (
    <ul className={styles["acttraction-list"]}>
      {data.map((item) => (
        <AttractionListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default AttractionsList;
