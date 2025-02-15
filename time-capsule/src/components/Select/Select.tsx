import { ComponentProps, ReactNode } from "react";

import styles from "./Select.module.css";
import { SelectOption } from "../../types/select-option.ts";

type Props = ComponentProps<"select"> & {
  options: SelectOption[];
};

function Select({ options }: Props): ReactNode {
  return (
    <select className={styles.select}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
