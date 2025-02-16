import { ComponentProps, ReactNode } from "react";

import { clsx } from "clsx";

import styles from "./button.module.css";

type Variant = "solid" | "otlined";
type Size = "medium" | "large";
type Shape = "rectangel" | "circle" | "square";

type Props = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  suffixIcon?: ReactNode;
};

function Button({
  children,
  variant = "solid",
  size = "medium",
  shape = "rectangel",
  className,
  suffixIcon,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        styles[shape],
        className,
      )}
      {...otherProps}
    >
      <div className={styles.suffixIcon}>{suffixIcon}</div>
      {children}
    </button>
  );
}

export default Button;
