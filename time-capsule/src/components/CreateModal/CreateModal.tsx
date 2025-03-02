import { ReactNode, useRef } from "react";

import Button from "../Button/button.tsx";

import MdiLightPlus from "../../icons/MdiLightPlus.tsx";

import styles from "./CreateModal.module.css";

import CreateForm from "../CreateForm/CreateForm.tsx";

function CreateModal(): ReactNode {
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
        />
      </dialog>
    </>
  );
}

export default CreateModal;
