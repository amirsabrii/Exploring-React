import {ReactNode, useEffect, useMemo, useState} from "react";

import AttractionsList from "../../components/AttractionsList/AttractionsList.tsx";
import Filters from "../../components/Filters/Filters.tsx";

import {FiltersType} from "../../type/filter.type.ts";
import {Attraction} from "../../type/attraction.ts";

import styles from "./Home.module.css"


function Home(): ReactNode {
  const [allAttractions, allSetAttractions] = useState<Attraction[]>([]);

  const [filter , setFilter] = useState<FiltersType>({tags : []})


  const filterActraction = useMemo(() => {
    return allAttractions.filter((actration) => {
      if (filter.tags.length ===0){
        return true;
      }else {
        return actration.tags.some((tag) =>
            filter.tags.find(x => x.id === tag.id)
        )}
    })
  } , [allAttractions , filter])

  useEffect(() => {
    const fetchAttractions = async () :Promise<void> => {
      const responce = await fetch(`${import.meta.env.VITE_API_BASE_URL}/whereabouts/attraction`);
      const data = await responce.json();
      allSetAttractions(data);
    };
    fetchAttractions().then();
  }, []);

  return <div className={styles.home}>
    <Filters filter={filter} setFilter={setFilter}/>
    <AttractionsList attractios={filterActraction}/>
  </div>;
}

export default Home;
