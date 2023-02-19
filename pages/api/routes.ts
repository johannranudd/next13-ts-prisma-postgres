// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

// type postProps = {
//   title: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // const post: postProps = JSON.parse(req.body);

    if (req.method === "GET") {
      const data = await prisma.post.findMany();
      // console.log(data);
      return res.status(200).json(data);
    }
    if (req.method === "DELETE") {
      const data = await prisma.post.deleteMany();
      // console.log(data);
      return res.status(200).json(data);
    }

    // if (req.method === "POST") {
    //   try {
    //     const data = prisma.post.create({
    //       data: {
    //         title: post.title,
    //       },
    //     });
    //     res.status(200).json(data);
    //   } catch (error) {
    //     res.status(500).json(error);
    //   }
    // }
    // if (req.method === "PUT") {
    // }
    // if (req.method === "DELETE") {
    // }
    // return res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }

  // else if (req.method === "POST") {
  //   const data = prisma.post.create({
  //     data: {
  //       req,
  //     },
  //   });
  // }
}
