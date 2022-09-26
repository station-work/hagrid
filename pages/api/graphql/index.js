import axios from "axios";

export default async (req, res) => {
  const headers = {
    ...req.headers,
    "x-hasura-admin-secret": process.env.HASURA_KEY,
    "content-type": "application/json",
  };

  const { data } = await axios.post(process.env.HASURA_URL, req.body, {
    headers,
  });
  res.json(data);
};
