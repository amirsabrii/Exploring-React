import { ReactNode, useContext } from "react";

import { CapsuleContext } from "../../context/CapsuleContext.tsx";

import Button from "../Button/button.tsx";

import MingcuteDeleteLine from "../../icons/MingcuteDeleteLine.tsx";
import IconParkSolidPencil from "../../icons/IconParkSolidPencil.tsx";

import styles from "./Result.module.css";

function Result(): ReactNode {
  const { capsule, removeCapsuloe } = useContext(CapsuleContext);

  return (
    <ul className={styles.result}>
      {capsule.map((capsule) => (
        <li key={capsule.id}>
          <div className={styles.title}>{capsule.title}</div>

          <div className={styles.action}>
            <Button ColorIcon={"danger"} size={"small"} variant={"ghost"}>
              <MingcuteDeleteLine onClick={() => removeCapsuloe(capsule.id)} />
            </Button>

            <Button ColorIcon={"golden"} size={"small"} variant={"ghost"}>
              <IconParkSolidPencil />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Result;
