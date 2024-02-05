import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LeadForm from "./pages/CreateLeadForm";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import UserConfirmation from "./pages/UserConfirmation";
function App() {
  const router = createBrowserRouter([
    {
      path: "/SignUp",
      element: <Registration />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/ConfirmUser",
      element: <UserConfirmation />,
    },
    {
      path: "/CreateLead",
      element: <LeadForm />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
