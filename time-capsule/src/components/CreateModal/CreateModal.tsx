import { ReactNode, useRef } from "react";

import { Capsule } from "../../types/capsule.ts";

import Button from "../Button/button.tsx";

import MdiLightPlus from "../../icons/MdiLightPlus.tsx";

import styles from "./CreateModal.module.css";

import CreateForm from "../CreateForm/CreateForm.tsx";

type Props = {
  setCpsule: React.Dispatch<React.SetStateAction<Capsule[]>>;
};

function CreateModal({ setCpsule }: Props): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const dialogHandler = (): void => {
    dialogRef.current?.showModal();
  };

  return (
    <>
      <div className={styles.create}>
        <Button shape={"circle"} size={"large"} onClick={dialogHandler}>
          <MdiLightPlus />
        </Button>
      </div>

      <dialog className={styles.dialog} ref={dialogRef}>
        <CreateForm
          onCancle={() => dialogRef.current?.close()}
          onSubmit={() => dialogRef.current?.close()}
          setCpsule={setCpsule}
        />
      </dialog>
    </>
  );
}

export default CreateModal;
