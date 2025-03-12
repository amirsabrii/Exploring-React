import { ReactNode, useContext, useEffect, useRef } from "react";

import Button from "../Button/button.tsx";

import MdiLightPlus from "../../icons/MdiLightPlus.tsx";

import styles from "./CreateModal.module.css";

import CreateForm from "../CreateForm/CreateForm.tsx";
import { CapsuleContext } from "../../context/CapsuleContext.tsx";

function CreateModal(): ReactNode {
  const { editCapsule, setEditCapsule } = useContext(CapsuleContext);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const dialogHandler = (): void => {
    dialogRef.current?.showModal();
  };

  useEffect(() => {
    if (editCapsule) {
      dialogRef.current?.showModal();
    }
  }, [editCapsule]);

  const closeModal = () => {
    dialogRef.current?.close();
    setEditCapsule(null);
  };

  return (
    <>
      <div className={styles.create}>
        <Button shape={"circle"} size={"large"} onClick={dialogHandler}>
          <MdiLightPlus />
        </Button>
      </div>

      <dialog className={styles.dialog} ref={dialogRef}>
        {editCapsule && (
          <CreateForm onCancel={closeModal} onSubmit={closeModal} />
        )}
        {!editCapsule && (
          <CreateForm onCancel={closeModal} onSubmit={closeModal} />
        )}
      </dialog>
    </>
  );
}

export default CreateModal;
