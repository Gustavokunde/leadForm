import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import Input from "../../components/Input";
import { confirmUser } from "../../services/auth/confirmUser";
import { Form } from "../../styles/form.styles";

const UserConfirmation = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      confirmationCode: "",
    },
    validationSchema: object().shape({
      email: string().required("Email is required"),
      confirmationCode: string()
        .required("Confirmation code is required")
        .length(6),
    }),
    onSubmit: ({ email, confirmationCode }) => {
      confirmUser(email, confirmationCode)
        .then(() => {
          navigate("/");
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
        type="text"
        {...inputFormHandler("confirmationCode")}
        label="Confirmation Code"
      />
      <button>Submit</button>
    </Form>
  );
};

export default UserConfirmation;
