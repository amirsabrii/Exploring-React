import { ReactNode } from "react";

import AttractionsList from "../../components/AttractionsList/AttractionsList.tsx";
import Filters from "../../components/Filters/Filters.tsx";

import FilterProvider from "../../Providers/FilterProvider.tsx";

import styles from "./Home.module.css";

function Home(): ReactNode {
  return (
    <div className={styles.home}>
      <FilterProvider>
        <Filters />
        <AttractionsList />
      </FilterProvider>
    </div>
  );
}

export default Home;
