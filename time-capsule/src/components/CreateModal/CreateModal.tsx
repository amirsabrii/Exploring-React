import { ReactNode, useRef } from "react";

import Button from "../Button/button.tsx";

import MdiLightPlus from "../../icons/MdiLightPlus.tsx";

import styles from "./CreateModal.module.css";
import TextInput from "../Text-input/Text-input.tsx";
import TeaxtArea from "../TextArea/TeaxtArea.tsx";
import DatetimeLocl from "../DatetimeLocal/DatetimeLocal.tsx";

function CreateModal(): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const dialogHandler = (): void => {
    dialogRef.current?.showModal();
  };
  const CancelHandler = (): void => {
    dialogRef.current?.close();
  };

  return (
    <>
      <div className={styles.create}>
        <Button shape={"circle"} size={"large"} onClick={dialogHandler}>
          <MdiLightPlus />
        </Button>
      </div>

      <dialog ref={dialogRef}>
        <div className={styles.content}>
          <div className={styles.title}>New Appointment</div>

          <TextInput placeholder="Youre title..."></TextInput>
          <TeaxtArea placeholder="Youre description" />
          <DatetimeLocl />

          <div className={styles.action}>
            <Button type={"button"} variant={"solid"} onClick={CancelHandler}>
              Cancel
            </Button>
            <Button variant={"otlined"}>Apply</Button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default CreateModal;
