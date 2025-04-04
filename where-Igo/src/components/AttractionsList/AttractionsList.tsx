import { ReactNode, useContext } from "react";

import AttractionListItem from "../AttractionsListItem/AttractionListItem.tsx";

import { fetchAttractions } from "../../api/fetch-attractions.ts";

import { FiltersContext } from "../../context/FilterContext.ts";

import { useQuery } from "@tanstack/react-query";

import styles from "./AttractionsList.module.css";

function AttractionsList(): ReactNode {
  const { filter } = useContext(FiltersContext);

  const { data , isLoading , isError } = useQuery({
    queryKey: ["attractions", filter],
    queryFn: () => fetchAttractions(filter),
  });

  if (isLoading){
    return <h1>Loading ....</h1>
  }

  if (isError){
    return <h1>Error</h1>
  }

  if (!data){
    return <h1>there is not data</h1>
  }


  return (
    <ul className={styles["acttraction-list"]}>
      {data.map((item) => (
        <AttractionListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default AttractionsList;
