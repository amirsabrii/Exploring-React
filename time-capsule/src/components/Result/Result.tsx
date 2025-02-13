import {ReactNode} from "react";
import {Capsule} from "../../types/capsule-type.ts";

import styles from './Result.module.css'

function Result() : ReactNode{
    const capsule : Capsule[] = [
        {
            id : 1,
            title : 'gym',
            describtion : 'going to the gym',
            date  : new Date(2025 , 4 , 15),
            vibe : 'good'
        }
    ]
    return (
        <div className={styles.result}>
            <ul>
                {
                    capsule.map((capsule, index) => (
                        <li key={index}>{capsule.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Result;