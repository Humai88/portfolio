import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.scss";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
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
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
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
