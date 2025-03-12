import { ReactNode, useContext } from "react";

import { CapsuleContext } from "../../context/CapsuleContext.tsx";

import Button from "../Button/button.tsx";

import MingcuteDeleteLine from "../../icons/MingcuteDeleteLine.tsx";
import IconParkSolidPencil from "../../icons/IconParkSolidPencil.tsx";

import styles from "./Result.module.css";

function Result(): ReactNode {
  const { capsule, removeCapsule, setEditCapsule } = useContext(CapsuleContext);

  return (
    <ul className={styles.result}>
      {capsule.map((capsule) => (
        <li key={capsule.id}>
          <div className={styles.title}>{capsule.title}</div>

          <div className={styles.action}>
            <Button
              colorIcon="golden"
              size="small"
              variant="ghost"
              onClick={() => {
                setEditCapsule(capsule);
              }}
            >
              <IconParkSolidPencil />
            </Button>

            <Button colorIcon={"danger"} size={"small"} variant={"ghost"}>
              <MingcuteDeleteLine onClick={() => removeCapsule(capsule.id)} />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Result;
