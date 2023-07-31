import axios from "axios";

export const api = axios.create({
  baseURL: "https://solar-energy-api.onrender.com/",
});
