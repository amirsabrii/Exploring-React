import {ReactNode, useRef, forwardRef, useImperativeHandle,} from "react";

import TaskForm from "../TaskForm/TaskForm.tsx";

import { Capsule } from "../../types/capsule.ts";

import styles from "../CreateModal/CreateModal.module.css";

export type TaskModalRef = Pick<HTMLDialogElement, "showModal" | "close">;

type Props = {
  editingCapsule?: Capsule;
};

const TaskModal = forwardRef<TaskModalRef, Props>(function TaskModal(
  { editingCapsule}, outerRef,): ReactNode {
  const innerRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(outerRef, () => ({
    showModal: (): void => {innerRef.current?.showModal();},
    close: (): void => {innerRef.current?.close();},
  }));

  const closeModal = () => {
    innerRef.current?.close();
  };

  return (
    <dialog className={styles.dialog} ref={innerRef}>
      <TaskForm
        onCancel={closeModal}
        onSubmit={closeModal}
        editingCapsule={editingCapsule}
      />
    </dialog>
  );
});

export default TaskModal;
