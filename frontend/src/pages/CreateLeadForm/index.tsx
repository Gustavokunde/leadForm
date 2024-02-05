import { useFormik } from "formik";
import { object, string } from "yup";
import Input from "../../components/Input";
import { createLead } from "../../services/lead/createLead";
import { Form } from "../../styles/form.styles";

const LeadForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: object().shape({
      name: string().required("Name is required"),
      email: string().email("Email not valid").required("Email is required"),
      phone: string().required("Phone is required"),
    }),
    onSubmit: (values) => {
      createLead(values);
    },
  });

  const inputFormHandler = (name: keyof typeof formik.values) => {
    return {
      onChange: formik.handleChange,
      id: name,
      name,
      errorMessage: formik.errors[name],
    };
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input type="text" {...inputFormHandler("name")} label="Name" />
      <Input type="email" {...inputFormHandler("email")} label="Email" />
      <Input type="tel" {...inputFormHandler("phone")} label="Phone" />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default LeadForm;
