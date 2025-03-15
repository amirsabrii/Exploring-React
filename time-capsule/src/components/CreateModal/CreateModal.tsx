import { ReactNode, useRef } from "react";

import Button from "../Button/button.tsx";
import TaskModal, { TaskModalRef } from "../TaskModal/TaskModal.tsx";

import MdiLightPlus from "../../icons/MdiLightPlus.tsx";

import styles from "./CreateModal.module.css";

function CreateModal(): ReactNode {
  const modalRef = useRef<TaskModalRef>(null);

  const dialogHandler = (): void => {
    modalRef.current?.showModal();
  };

  return (
    <>
      <div className={styles.create}>
        <Button shape={"circle"} size={"large"} onClick={dialogHandler}>
          <MdiLightPlus />
        </Button>
      </div>
      <TaskModal ref={modalRef} />
    </>
  );
}

export default CreateModal;
