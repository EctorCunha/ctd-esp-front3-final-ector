import axios from "axios";

export const urlInstance = axios.create({
  baseURL: "/api",
});
