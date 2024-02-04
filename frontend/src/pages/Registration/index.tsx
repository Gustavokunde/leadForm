import { useFormik } from "formik";
import { object, string } from "yup";
import { registerUser } from "../../services/auth/register";


const Registration = () => {

 const formik = useFormik({
    initialValues:{
         email: "", password:"", phone: ""
    },
    validationSchema: object().shape({
        email: string()
            .email("Email not valid")
            .required("Email is required"),
        password: string().required("Password is required"),
        phone:string().required("Phone is required"),
    }),
    onSubmit: (values)=>{
        registerUser(values.email, values.password, values.phone)
    }
 });


 const inputFormHandler = (name: keyof typeof formik.values) =>{
    return {
        onChange:formik.handleChange,
        id: name,
        name,
    }
 }


  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Email:</label>
      <input type="email" {...inputFormHandler("email")}/>

      <label>Password:</label>
      <input type="password" {...inputFormHandler("password")}/>

      <label>Phone:</label>
      <input type="tel" {...inputFormHandler("phone")}/>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Registration;
