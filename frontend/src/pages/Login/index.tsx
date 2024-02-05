import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import Input from "../../components/Input";
import { authenticate } from "../../services/auth/authenticate";
import { Form } from "../../styles/form.styles";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: object().shape({
      email: string().email("Email not valid").required("Email is required"),
      password: string().required("Password is required"),
    }),
    validateOnBlur: true,
    onSubmit: ({ email, password }) => {
      authenticate(email, password).then(({ token }: { token: string }) => {
        sessionStorage.setItem("authToken", token);
        navigate("/createLead");
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
      <Link to={"signup"}>Sign up</Link>
      <button>Submit</button>
    </Form>
  );
};

export default Login;
