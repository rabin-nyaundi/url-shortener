import axios, { AxiosResponse } from "axios";

type Data = string;

export const post = async (postData: Object) => {
  const res = await axios({
    method: "POST",
    url: "https://api-ssl.bitly.com/v4/shorten",
    data: postData,
    headers: {
      Authorization: `Bearer 07d7aaec94e17a2d8950fb2f19c065543951333b`,
      "Content-Type": "application/json",
    },
  });

  return res.data;
};
