import { ComponentProps, ReactNode } from "react";

import { clsx } from "clsx";

import styles from "./button.module.css";

type Variant = "solid" | "otlined" | "ghost";
type Size = "small" | "medium" | "large";
type Shape = "rectangel" | "circle" | "square";
type ColorIcon = "none" | "danger" | "golden";

type Props = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  suffixIcon?: ReactNode;
  colorIcon?: ColorIcon;
};

function Button({
  children,
  variant = "solid",
  size = "medium",
  shape = "rectangel",
  className,
  suffixIcon,
  colorIcon = "none",
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        styles[shape],
        styles[colorIcon],
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
