import {ReactNode, useRef, forwardRef, useImperativeHandle,} from "react";

import CapsuleForm from "../CapsuleForm/CapsuleForm.tsx";

import { Capsule } from "../../types/capsule.ts";

import styles from "../CreateModal/CreateModal.module.css";
import Toaster from "../toaster.tsx";

export type CapsuleModalRef = Pick<HTMLDialogElement, "showModal" | "close">;

type Props = {
  editingCapsule?: Capsule;
};

const CapsuleModal = forwardRef<CapsuleModalRef, Props>(function CapsuleModal(
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
      <CapsuleForm
        onCancel={closeModal}
        onSubmit={closeModal}
        editingCapsule={editingCapsule}
      />
      <Toaster containerId='modal'/>
    </dialog>
  );
});

export default CapsuleModal;
