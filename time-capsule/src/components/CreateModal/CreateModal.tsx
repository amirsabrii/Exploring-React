import { ReactNode } from "react";

import Button from "../Button/button.tsx";

import MdiLightPlus from "../../icons/MdiLightPlus.tsx";

import styles from "./reateModal.module.css";

function CreateModal(): ReactNode {
  return (
    <div className={styles.create}>
      <Button shape={"circle"} size={"large"}>
        <MdiLightPlus />
      </Button>
    </div>
  );
}

export default CreateModal;
