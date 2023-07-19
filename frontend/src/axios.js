import axios from "axios";

const axiosInstance = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://contacts-app-backend-d9b6o3sb6-shubham09122003.vercel.app",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
};

export default axiosInstance;
