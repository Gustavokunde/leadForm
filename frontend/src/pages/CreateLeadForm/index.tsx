import { useFormik } from "formik";
import { object, string } from "yup";


const LeadForm = () => {

 const formik = useFormik({
    initialValues:{
        name: "", email: "", phone:""
    },
    validationSchema: object().shape({
        name: string()
        .email("Email not valid")
        .required("Email is required"),
        email: string()
            .email("Email not valid")
            .required("Email is required"),
        phone: string().required("Phone is required")
    }),
    onSubmit: ()=>{console.log("do domething")}
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
      <label>Name:</label>
      <input type="text" {...inputFormHandler("name")}/>

      <label>Email:</label>
      <input type="email" {...inputFormHandler("email")}/>

      <label>Phone:</label>
      <input type="tel" {...inputFormHandler("phone")}/>

      <button>Submit</button>
    </form>
  );
};

export default LeadForm;
