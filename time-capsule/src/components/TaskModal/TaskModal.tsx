import {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import styles from "../CreateModal/CreateModal.module.css";
import CreateForm from "../CreateForm/CreateForm.tsx";
import { CapsuleContext } from "../../context/CapsuleContext.tsx";

export type TaskModalRef = Pick<HTMLDialogElement, "showModal" | "close">;

const TaskModal = forwardRef<TaskModalRef>(
  function TaskModal(_, outerRef): ReactNode {
    const { editingCapsule, setEditingCapsule } = useContext(CapsuleContext);

    const innerRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(outerRef, () => ({
      showModal: (): void => {
        innerRef.current?.showModal();
      },
      close: (): void => {
        innerRef.current?.close();
      },
    }));

    useEffect(() => {
      if (editingCapsule) {
        innerRef.current?.showModal();
      }
    }, [editingCapsule]);

    const closeModal = () => {
      innerRef.current?.close();
      setEditingCapsule(null);
    };

    return (
      <dialog className={styles.dialog} ref={innerRef}>
        {editingCapsule && (
          <CreateForm onCancel={closeModal} onSubmit={closeModal} />
        )}
        {!editingCapsule && (
          <CreateForm onCancel={closeModal} onSubmit={closeModal} />
        )}
      </dialog>
    );
  },
);

export default TaskModal;
