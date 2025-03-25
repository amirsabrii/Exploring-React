import {ReactNode, useState} from "react";


import styles from "./Filters.module.css"

import {filterTags} from "../../data/TagData.ts";
import clsx from "clsx";

function Filters() : ReactNode{
    const [selected , setSelcted] = useState<number[]>([])

    const toggleSelect = (id : number) : void => {
        setSelcted((old) => {
            const index = old.findIndex((x) => x === id);

            if (index === -1){
                return [...old , id]
            }

            return old.filter(x => x !==id)
        })
    }
    return (
        <div className={styles.filter}>
            <div className={styles.title}>برچسب ها</div>
            <div className={styles["filter-tags"]}>
                <ul>
                    {filterTags.map((tag) => (
                        <li onClick={() => toggleSelect(tag.id)} className={clsx(selected.includes(tag.id) && styles.select)} key={tag.id}>{tag.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Filters;