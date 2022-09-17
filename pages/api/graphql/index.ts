import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const headers = {
  "x-hasura-admin-secret": process.env.HASURA_KEY,
  "content-type": "application/json",
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await axios.post(
    process.env.HASURA_URL,
    req.body,
    {
      headers,
    }
  );
  res.json(data);
};
