import { Formik, Form } from "formik";
import Button from "../../UI/Button/Button";
import * as Yup from "yup";
import styles from "./Form.module.scss";
import { Input } from "../../UI/Input/Input";
import { Textarea } from "../../UI/Textarea/Textarea";
import axios from "axios";

export const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Must be at least 2 characters")
            .max(15, "Must be 15 characters or less")
            .required("Required!"),
          email: Yup.string()
            .email("Must be a valid email!")
            .required("Required!"),
          message: Yup.string().min(50, "Must be at least 50 characters"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          resetForm();
          setSubmitting(false);
          console.log(values);
        }}
      >
        {(props) => {
          return (
            <Form className={styles.form}>
              <Input type="text" name="name" placeholder="Name" />
              <Input type="text" name="email" placeholder="E-mail" />
              <Textarea name="message" placeholder="Your message" />
              <div className={styles.msg}>Message has been sent</div>
              <Button className={styles.btn} type="submit">
                {props.isSubmitting ? "Loading..." : "send message"}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
