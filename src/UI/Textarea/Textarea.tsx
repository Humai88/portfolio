import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.scss";
import { FieldHookConfig, useField } from "formik";

type CustomInputPropsType = FieldHookConfig<string> & {
  label?: string;
  className?: string;
} & DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;

export const Textarea = (props: CustomInputPropsType) => {
  const [field, meta] = useField(props);
  const { label, className } = props;
  return (
    <>
      {/* <label className={styles.checkbox} htmlFor={props.name}>
        {label}
      </label> */}
      <textarea
        className={`${styles.textarea} ${className}`}
        {...field}
        {...props}
      ></textarea>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};
