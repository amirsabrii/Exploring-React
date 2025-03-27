import { ReactNode, useState } from "react";

import styles from "./Filters.module.css";

import { filterTags } from "../../data/TagData.ts";

function Filters(): ReactNode {
  const [selected, setSelcted] = useState<number[]>([]);

  const toggleSelect = (id: number): void => {
    setSelcted((old) => {
      const index = old.findIndex((x) => x === id);

      if (index === -1) {
        return [...old, id];
      }

      return old.filter((x) => x !== id);
    });
  };
  return (
    <div className={styles.filter}>
      <div className={styles.title}>برچسب ها</div>
      <div className={styles["filter-tags"]}>
        <div className={styles.options}>
          {filterTags.map((tag) => (
            <label>
              <input
                key={tag.id}
                type={"checkbox"}
                checked={selected.includes(tag.id)}
                onChange={() => toggleSelect(tag.id)}
              />
              {tag.title}
            </label>
            // <li onClick={() => toggleSelect(tag.id)} className={clsx(selected.includes(tag.id) && styles.select)} key={tag.id}>{tag.title}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
