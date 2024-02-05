import { useFormik } from "formik";
import { object, string } from "yup";
import { authenticate } from "../../services/auth/authenticate";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: object().shape({
      email: string().email("Email not valid").required("Email is required"),
      password: string().required("Password is required"),
    }),
    onSubmit: ({ email, password }) => {
      authenticate(email, password).then(({ token }: { token: string }) => {
        sessionStorage.setItem("authToken", token);
      });
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

      <label>Password:</label>
      <input type="tel" {...inputFormHandler("password")} />

      <button>Submit</button>
    </form>
  );
};

export default Login;
