import { FormEvent, ReactNode, useContext } from "react";

import TextInput from "../TextInput/TextInput.tsx";
import TeaxtArea from "../TextArea/TeaxtArea.tsx";
import DatetimeLocl from "../DatetimeLocal/DatetimeLocal.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/button.tsx";

import styles from "./TaskForm.module.css";
import { Capsule } from "../../types/capsule.ts";
import { Category } from "../../types/category.ts";

import { CapsuleContext } from "../../context/CapsuleContext.tsx";

type Props = {
  editingCapsule?: Capsule;
  onCancel: () => void;
  onSubmit: () => void;
};

function TaskForm({ editingCapsule, onCancel, onSubmit }: Props): ReactNode {
  const { createCapsule, editCapsule } = useContext(CapsuleContext);

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const capsule: Capsule = {
      id: editingCapsule?.id ?? crypto.randomUUID(),
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      date: new Date(formData.get("date") as string),
      category: formData.get("category") as Category,
    };
    if (editingCapsule) {
      editCapsule(capsule);
    } else {
      createCapsule(capsule);
    }
    onSubmit();
  };

  const CancelHandler = (): void => {
    onCancel();
  };

  return (
    <form className={styles.content} onSubmit={submitHandler}>
      <div className={styles.title}>
        {editingCapsule ? `Edit  Capsule ${editingCapsule.title}` : "New Appointment"}
      </div>

      <TextInput
        name="title"
        placeholder="your title..."
        defaultValue={editingCapsule?.title}
      ></TextInput>
      <TeaxtArea
        name="description"
        placeholder="your description"
        defaultValue={editingCapsule?.description}
      />
      <DatetimeLocl name="date" />
      <Select
        name="category"
        variant={"outlined"}
        defaultValue={editingCapsule?.category}
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
        <Button>{editingCapsule ? "Edit" : "Apply"}</Button>
      </div>
    </form>
  );
}

export default TaskForm;
