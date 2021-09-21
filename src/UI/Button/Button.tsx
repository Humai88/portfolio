import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonPropsType = DefaultButtonPropsType & {
  red?: boolean;
};

const Button: React.FC<ButtonPropsType> = ({
  red,
  className,
  ...restProps
}) => {
  const finalClassName = `${red ? styles.red : styles.default} ${className}`;

  return (
    <div>
      <button className={finalClassName} {...restProps} />
      <div className={styles.after}></div>
    </div>
  );
};

export default Button;
