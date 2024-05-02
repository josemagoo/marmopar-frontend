// axiosConfig.ts

import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
