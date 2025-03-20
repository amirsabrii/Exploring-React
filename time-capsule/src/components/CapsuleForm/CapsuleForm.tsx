import {FormEvent, ReactNode, useContext, useEffect, useState} from "react";

import TextInput from "../TextInput/TextInput.tsx";
import TeaxtArea from "../TextArea/TeaxtArea.tsx";
import DatetimeLocl from "../DatetimeLocal/DatetimeLocal.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/button.tsx";
import {toast} from "react-toastify";

import { CapsuleContext } from "../../context/CapsuleContext.tsx";

import { Capsule } from "../../types/capsule.ts";
import { Category } from "../../types/category.ts";


import styles from "./CapsuleForm.module.css";

type Props = {
  editingCapsule?: Capsule;
  onCancel: () => void;
  onSubmit: () => void;
};

function CapsuleForm({ editingCapsule, onCancel, onSubmit }: Props): ReactNode {
  const { createCapsule, editCapsule } = useContext(CapsuleContext);

  const [formData , setFormData] = useState(generateCapsuleInitialState())

    useEffect(() => {
        setFormData(editingCapsule ? {...editingCapsule} : generateCapsuleInitialState)
    } , [editingCapsule])

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

      if(!formData.title){
          toast.error('title is required'  , {containerId : 'modal'});
          return;
      }
      if(!formData.description){
          toast.error('description is required'  , {containerId : 'modal'});
          return;
      }
      if(!formData.category){
          toast.error('category is required'  , {containerId : 'modal'});
          return;
      }


    if (editingCapsule) {
      editCapsule(formData);
    } else {
      createCapsule(formData);
    }
    setFormData(generateCapsuleInitialState)
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
        value={formData.title}
        onChange={(e) => setFormData((old) => ({...old , title : e.target.value}))}

      ></TextInput>

      <TeaxtArea
        name="description"
        placeholder="your description"
        value={formData.description}
        onChange={(e) => setFormData((old) => ({...old , description : e.target.value}))}
      />
      <DatetimeLocl name="date"
onChange={(e) => setFormData((old) => ({...old , date : e.target.value}))}

      />
      <Select
          key={editingCapsule?.id}
        name="category"
        variant={"outlined"}
        value={formData.category}
          onChange={(e) => setFormData((old) => ({...old , category : e.target.value as Category}))}
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

  // function formValidatin(){
  //     if (!formData.title){
  //         toast.success('noo' , {containerId : 'modal'})
  //     }
  // }
}

function generateCapsuleInitialState() : Capsule{
    return{
            id: crypto.randomUUID(),
            title: '',
            description: '',
            date: '',
            category: 'friendly',
        };

}
export default CapsuleForm;
