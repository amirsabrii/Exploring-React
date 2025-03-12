import { ReactNode, useContext, useEffect, useRef } from "react";

import Button from "../Button/button.tsx";

import MdiLightPlus from "../../icons/MdiLightPlus.tsx";

import styles from "./CreateModal.module.css";

import CreateForm from "../CreateForm/CreateForm.tsx";
import { CapsuleContext } from "../../context/CapsuleContext.tsx";

function CreateModal(): ReactNode {
  const { editingCapsule, setEditingCapsule } = useContext(CapsuleContext);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const dialogHandler = (): void => {
    dialogRef.current?.showModal();
  };

  useEffect(() => {
    if (editingCapsule) {
      dialogRef.current?.showModal();
    }
  }, [editingCapsule]);

  const closeModal = () => {
    dialogRef.current?.close();
    setEditingCapsule(null);
  };

  return (
    <>
      <div className={styles.create}>
        <Button shape={"circle"} size={"large"} onClick={dialogHandler}>
          <MdiLightPlus />
        </Button>
      </div>

      <dialog className={styles.dialog} ref={dialogRef}>
        {editingCapsule && (
          <CreateForm onCancel={closeModal} onSubmit={closeModal} />
        )}
        {!editingCapsule && (
          <CreateForm onCancel={closeModal} onSubmit={closeModal} />
        )}
      </dialog>
    </>
  );
}

export default CreateModal;
