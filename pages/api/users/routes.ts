// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

// type postProps = {
//   title: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("req.method === ", req.method);
  if (req.method === "GET") {
    try {
      const data = await prisma.user.findMany();
      return res.status(200).json(data);
    } catch (error) {
      console.log(
        error,
        "and error occured in user/routes handler() / method: GET"
      );
      return res.status(500).send({ message: error });
    }
  }
  if (req.method === "POST") {
    try {
      const data = await prisma.user.create({
        data: req.body,
      });
      return res.status(200).json(data);
    } catch (error) {
      console.log(
        error,
        "and error occured in user/routes handler() / method: POST"
      );
      return res.status(500).send({ message: error });
    }
  }
}
