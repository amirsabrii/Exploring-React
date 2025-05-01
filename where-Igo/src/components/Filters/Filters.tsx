import { ReactNode, useContext, useState } from "react";

import { FiltersContext } from "../../context/FilterContext.ts";

import { filterTags } from "../../data/TagData.ts";

import MingcuteCloseLine from "../../icons/MingcuteCloseLine.tsx";

import styles from "./Filters.module.css";
import clsx from "clsx";

function Filters(): ReactNode {
  const { filter, toggleTags } = useContext(FiltersContext);

  const [isopen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!isopen);
    console.log(isopen);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.title}>برچسب ها</div>

      <div className={styles["menu-filter"]} onClick={toggleMenu}>
        فیلتر ها
      </div>
      {filter.tags.length >= 1 && (
        <div className={styles.tag}>
          <ul>
            {filter.tags.map((x) => (
              <li key={x.title}>
                {x.title} <MingcuteCloseLine />
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={clsx(styles["filter-tags"], isopen && styles.active)}>
        <div className={styles.options}>
          {filterTags.map((tags) => (
            <label key={tags.id}>
              <input
                key={tags.id}
                type={"checkbox"}
                checked={!!filter.tags.find((x) => x.id === tags.id)}
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
