import { ReactNode, useContext, useRef, useState } from "react";

import { CapsuleContext } from "../../context/CapsuleContext.tsx";

import Button from "../Button/button.tsx";

import MingcuteDeleteLine from "../../icons/MingcuteDeleteLine.tsx";
import IconParkSolidPencil from "../../icons/IconParkSolidPencil.tsx";

import styles from "./Result.module.css";
import { Capsule } from "../../types/capsule.ts";
import CapsuleModal, { CapsuleModalRef } from "../CapsuleModal/CapsuleModal.tsx";

function Result(): ReactNode {
  const { capsule, removeCapsule } = useContext(CapsuleContext);

  const [editingCapsule, setEditingCapsule] = useState<Capsule | null>(null);

  const modalRef = useRef<CapsuleModalRef>(null);

  const EditDialogHandler = (capsule: Capsule): void => {
    setEditingCapsule(capsule);
    modalRef.current?.showModal();
  };

  return (
    <>
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
                  EditDialogHandler(capsule);
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
      <CapsuleModal ref={modalRef} editingCapsule={editingCapsule ?? undefined} />
    </>
  );
}

export default Result;
