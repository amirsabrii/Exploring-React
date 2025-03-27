import { ReactNode } from "react";


import { filterTags } from "../../data/TagData.ts";
import {FiltersType} from "../../type/filter.type.ts";

import styles from "./Filters.module.css";
import {AttractionTag} from "../../type/attraction-tag.ts";
import MingcuteCloseLine from "../../icons/MingcuteCloseLine.tsx";

type Props = {
  filter : FiltersType,
  setFilter :  React.Dispatch<React.SetStateAction<FiltersType>>
}

function Filters({filter , setFilter} : Props): ReactNode {


  const toggleTags = (tag : AttractionTag): void => {
    setFilter((old) => {
      const index = old.tags.findIndex((x) => x.id === tag.id);

      if (index === -1) {
        return {...old, tags : [...old.tags , tag]};
      }

      const clone = [...old.tags]
      clone.splice(index , 1)
      return {...old , tags : clone}
    });
  };

  // const remove = (ids : number) => {
  //   setFilter((old)  =>  old.tags.filter((x) => { x.id !== ids})
  //   )
  // }
  return (
    <div className={styles.filter}>
      <div className={styles.title}>برچسب ها</div>
      {filter.tags.length >=1 && <div className={styles.tag}>
        <ul>
          {filter.tags.map((x) => (
              <li key={x.title}>{x.title} <MingcuteCloseLine/></li>
          ))}
        </ul>
      </div>}

      <div className={styles["filter-tags"]}>
        <div className={styles.options}>
          {filterTags.map((tags) => (
              <label key={tags.id}>
                <input
                    key={tags.id}
                    type={"checkbox"}
                checked={!!filter.tags.find(x => x.id === tags.id)}
                onChange={() => toggleTags(tags)}
              />
              {tags.title}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
