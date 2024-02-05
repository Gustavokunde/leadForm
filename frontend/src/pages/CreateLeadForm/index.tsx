import { useFormik } from "formik";
import { object, string } from "yup";
import { createLead } from "../../services/lead/createLead";

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
      console.log("called submit function");
      createLead(values);
    },
  });

  const inputFormHandler = (name: keyof typeof formik.values) => {
    return {
      onChange: formik.handleChange,
      id: name,
      name,
    };
  };

  console.log(formik.isValid, formik.errors);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Name:</label>
      <input type="text" {...inputFormHandler("name")} />

      <label>Email:</label>
      <input type="email" {...inputFormHandler("email")} />

      <label>Phone:</label>
      <input type="tel" {...inputFormHandler("phone")} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default LeadForm;
