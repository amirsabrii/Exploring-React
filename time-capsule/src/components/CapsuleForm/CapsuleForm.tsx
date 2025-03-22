import {FormEvent, ReactNode, useContext, useEffect, useState} from "react";

import { CapsuleContext } from "../../context/CapsuleContext.tsx";

import {useTranslation} from "react-i18next";

import TextInput from "../TextInput/TextInput.tsx";
import TeaxtArea from "../TextArea/TeaxtArea.tsx";
import DatetimeLocl from "../DatetimeLocal/DatetimeLocal.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/button.tsx";
import {toast} from "react-toastify";


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

    const {t} = useTranslation()

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
        {editingCapsule ? t("capsule.create.edit" , {title : editingCapsule.title}): t("capsule.create.title")}
      </div>

      <TextInput
        name="title"
        placeholder={t("capsule.form.title.placeholder")}
        value={formData.title}
        onChange={(e) => setFormData((old) => ({...old , title : e.target.value}))}

      ></TextInput>

      <TeaxtArea
        name="description"
        placeholder={t("capsule.form.description.placeholder")}
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
          { value: "work", label: t('capsule.form.Category.work') },
          { value: "friendly", label: t('capsule.form.Category.friendly')},
          { value: "family", label: t('capsule.form.Category.family') },
        ]}
      ></Select>

      <div className={styles.action}>
        <Button type={"button"} variant={"solid"} onClick={CancelHandler}>
            {t("capsule.actions.cancel")}
        </Button>
        <Button>{editingCapsule ? t('capsule.actions.edit') : t('capsule.actions.create') }</Button>
      </div>
    </form>
  );

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
