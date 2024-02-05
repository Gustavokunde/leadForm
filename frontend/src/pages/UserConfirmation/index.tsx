import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import Input from "../../components/Input";
import { confirmUser } from "../../services/auth/confirmUser";
import { Form } from "../../styles/form.styles";

const UserConfirmation = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const email = new URLSearchParams(search).get("email")!;
  const formik = useFormik({
    initialValues: {
      confirmationCode: "",
    },
    validationSchema: object().shape({
      confirmationCode: string()
        .required("Confirmation code is required")
        .length(6),
    }),
    onSubmit: ({ confirmationCode }) => {
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
