import axios from "axios";

const env = process.env.NODE_ENV;

export const ethosViewApi = axios.create({
  baseURL:
    env == "development"
      ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL_VIEW
      : process.env.NEXT_PUBLIC_URL_VIEW,
  headers: {
    secretcode:
      env == "development"
        ? process.env.NEXT_PUBLIC_DEVELOPMENT_SECRET_CODE
        : process.env.NEXT_PUBLIC_SECRET_CODE || "",
    secretkey:
      env == "development"
        ? process.env.NEXT_PUBLIC_DEVELOPMENT_SECRET_KEY
        : process.env.NEXT_PUBLIC_SECRET_KEY || "",
  },
});

export const ethosPostApi = axios.create({
  baseURL:
    env == "development"
      ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL_POST
      : process.env.NEXT_PUBLIC_URL_POST,
  headers: {
    secretcode:
      env == "development"
        ? process.env.NEXT_PUBLIC_DEVELOPMENT_SECRET_CODE
        : process.env.NEXT_PUBLIC_SECRET_CODE || "",
    secretkey:
      env == "development"
        ? process.env.NEXT_PUBLIC_DEVELOPMENT_SECRET_KEY
        : process.env.NEXT_PUBLIC_SECRET_KEY || "",
    "Content-Type": "multipart/form-data",
  },
});
