import axios from "@/config/axios";

export const sendEmail = async (body: any) => {
  const response = await axios({
    method: "POST",
    url: "/contacto",
    data: JSON.stringify(body),
  });

  return response;
};
