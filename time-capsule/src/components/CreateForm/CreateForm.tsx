import { FormEvent, ReactNode, useContext } from "react";

import TextInput from "../TextInput/TextInput.tsx";
import TeaxtArea from "../TextArea/TeaxtArea.tsx";
import DatetimeLocl from "../DatetimeLocal/DatetimeLocal.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/button.tsx";

import styles from "./CreateForm.module.css";
import { Capsule } from "../../types/capsule.ts";
import { Category } from "../../types/category.ts";

import { CapsuleContext } from "../../context/CapsuleContext.tsx";

type Props = {
  onCancel: () => void;
  onSubmit: () => void;
};

function CreateForm({ onCancel, onSubmit }: Props): ReactNode {
  const { createCapsule, editCapsule, editingCapsule } =
    useContext(CapsuleContext);

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const capsule: Capsule = {
      id: editCapsule?.id ?? crypto.randomUUID(),
      title: formData.get("title") as string,
      describtion: formData.get("describtion") as string,
      date: new Date(formData.get("date") as string),
      category: formData.get("category") as Category,
    };
    if (editCapsule) {
      editingCapsule(capsule);
    } else {
      createCapsule(capsule);
    }
    onSubmit();
  };

  const CancelHandler = (): void => {
    // dialogRef.current?.close();
    onCancel();
  };

  return (
    <form className={styles.content} onSubmit={submitHandler}>
      <div className={styles.title}>New Appointment</div>

      <TextInput
        name="title"
        placeholder="Youre title..."
        defaultValue={editCapsule?.title}
      ></TextInput>
      <TeaxtArea
        name="describtion"
        placeholder="Youre description"
        defaultValue={editCapsule?.describtion}
      />
      <DatetimeLocl name="date" />
      <Select
        name="category"
        variant={"outlined"}
        defaultValue={editCapsule?.category}
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
        <Button>Apply</Button>
      </div>
    </form>
  );
}

export default CreateForm;
