import { FormEvent, ReactNode, useContext } from "react";

import TextInput from "../TextInput/TextInput.tsx";
import TeaxtArea from "../TextArea/TeaxtArea.tsx";
import DatetimeLocl from "../DatetimeLocal/DatetimeLocal.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/button.tsx";

import styles from "./CreateForm.module.css";
import { Capsule } from "../../types/capsule.ts";
import { Category } from "../../types/category.ts";
import { capsuleContext } from "../../App.tsx";

type Props = {
  onCancle: () => void;
  onSubmit: () => void;
};

function CreateForm({ onCancle, onSubmit }: Props): ReactNode {
  const { setCpsule } = useContext(capsuleContext);

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
    onSubmit();
  };

  const CancelHandler = (): void => {
    // dialogRef.current?.close();
    onCancle();
  };

  return (
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
  );
}

export default CreateForm;
