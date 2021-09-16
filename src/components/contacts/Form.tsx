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
            .max(30, "Must be less then 30 characters")
            .required("Required!"),
          email: Yup.string()
            .email("Must be a valid email!")
            .required("Required!"),
          message: Yup.string().min(30, "Must be at least 30 characters"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          resetForm();
          setSubmitting(false);
          console.log(values);
          axios.post("http://localhost:3010/sendMessage", values).then(() => {
            alert("Message was sent");
          });
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
