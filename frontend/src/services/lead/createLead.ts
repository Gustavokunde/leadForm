import axios from "axios";

interface Lead {
  name: string;
  email: string;
  phone: string;
}

export async function createLead(values: Lead) {
  return axios.post("http://localhost:3000/leads", {
    ...values,
  });
}
