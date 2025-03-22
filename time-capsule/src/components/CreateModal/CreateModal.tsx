import { ReactNode, useRef } from "react";

import Button from "../Button/button.tsx";
import CapsuleModal, { CapsuleModalRef } from "../CapsuleModal/CapsuleModal.tsx";

import MdiLightPlus from "../../icons/MdiLightPlus.tsx";

import styles from "./CreateModal.module.css";

function CreateModal(): ReactNode {
  const modalRef = useRef<CapsuleModalRef>(null);

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
      <CapsuleModal ref={modalRef} />
    </>
  );
}

export default CreateModal;
