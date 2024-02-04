import { useFormik } from "formik";
import { object, string } from "yup";
import { confirmUser } from "../../services/auth/confirmUser";

const UserConfirmation = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      confirmationCode: "",
    },
    validationSchema: object().shape({
      email: string().required(),
      confirmationCode: string().required().length(6),
    }),
    onSubmit: ({ email, confirmationCode }) => {
      confirmUser(email, confirmationCode);
    },
  });

  const inputFormHandler = (name: keyof typeof formik.values) => {
    return {
      onChange: formik.handleChange,
      id: name,
      name,
    };
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Email:</label>
      <input type="email" {...inputFormHandler("email")} />

      <label>Confirmation Code:</label>
      <input type="text" {...inputFormHandler("confirmationCode")} />

      <button>Submit</button>
    </form>
  );
};

export default UserConfirmation;
