import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import Input from "../../components/Input";
import { registerUser } from "../../services/auth/register";
import { Form } from "../../styles/form.styles";

const Registration = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: object().shape({
      email: string().email("Email not valid").required("Email is required"),
      password: string().required("Password is required"),
      phone: string().required("Phone is required"),
    }),
    onSubmit: (values) => {
      registerUser(values.email, values.password, values.phone)
        .then(() => {
          navigate(`/confirmUser?email=${values.email}`);
        })
        .catch((err) => {
          alert(err.message);
        });
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
      <Input type="email" {...inputFormHandler("email")} label="Email" />
      <Input
        type="password"
        {...inputFormHandler("password")}
        label="Password"
      />
      <Input type="tel" {...inputFormHandler("phone")} label="Phone" />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default Registration;
