import axios from "./axios";

const ApiService = async (data) => {
  try {
    const response = await axios.post("/api/contact-us/", data);
    return response; // return full response
  } catch (error) {
    console.error("API Error:", error);
    throw error; // pass error to form
  }
};

export default ApiService;
