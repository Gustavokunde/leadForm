import axios from "axios";

interface Lead {
  name: string;
  email: string;
  phone: string;
}

const authToken = sessionStorage.getItem("authToken");

export async function createLead(values: Lead) {
  return axios.post(
    "http://localhost:3000/leads",
    {
      ...values,
    },
    {
      headers: {
        Authorization: authToken,
      },
    }
  );
}
