import { FormEvent, ReactNode, useRef } from "react";

import { Capsule } from "../../types/capsule.ts";

import Button from "../Button/button.tsx";
import TextInput from "../TextInput/TextInput.tsx";
import TeaxtArea from "../TextArea/TeaxtArea.tsx";
import DatetimeLocl from "../DatetimeLocal/DatetimeLocal.tsx";
import Select from "../Select/Select.tsx";

import MdiLightPlus from "../../icons/MdiLightPlus.tsx";

import styles from "./CreateModal.module.css";
import { Category } from "../../types/category.ts";

type Props = {
  setCpsule: React.Dispatch<React.SetStateAction<Capsule[]>>;
};

function CreateModal({ setCpsule }: Props): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const dialogHandler = (): void => {
    dialogRef.current?.showModal();
  };
  const CancelHandler = (): void => {
    dialogRef.current?.close();
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const capsule: Capsule = {
      id: 5,
      title: formData.get("title") as string,
      describtion: formData.get("describtion") as string,
      date: new Date(formData.get("date") as string),
      category: formData.get("category") as Category,
    };

    setCpsule((old) => [...old, capsule]);
    dialogRef.current?.close();
  };

  return (
    <>
      <div className={styles.create}>
        <Button shape={"circle"} size={"large"} onClick={dialogHandler}>
          <MdiLightPlus />
        </Button>
      </div>

      <dialog className={styles.dialog} ref={dialogRef}>
        <form className={styles.content} onSubmit={submitHandler}>
          <div className={styles.title}>New Appointment</div>

          <TextInput name="title" placeholder="Youre title..."></TextInput>
          <TeaxtArea name="description" placeholder="Youre description" />
          <DatetimeLocl name="date" />
          <Select
            name="category"
            variant={"outlined"}
            options={[
              { value: "work", label: "work" },
              { value: "friendly", label: "friendly" },
              { value: "family", label: "family" },
            ]}
          ></Select>

          <div className={styles.action}>
            <Button type={"button"} variant={"solid"} onClick={CancelHandler}>
              Cancel
            </Button>
            <Button variant={"otlined"}>Apply</Button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default CreateModal;
