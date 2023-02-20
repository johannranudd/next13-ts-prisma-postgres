// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("req.method === ", req.method);
  const postId = req.url?.split("/api/posts/", 10)[1];
  console.log(postId);
  //   get the ID from URL,
  //   find unique where id: ID_FROM_URL
  //   f9b02d6c-63f5-45af-95e1-472181685fa5
  //   console.log(uuid);

  if (req.method === "GET") {
    try {
      const data = await prisma.post.findMany({
        where: {
          authorId: postId,
        },
      });
      console.log(data);
      return res.status(200).json(data);
    } catch (error) {
      console.log(error, "and error occured in routes handler() / method: GET");
      return res.status(500).send({ message: error });
    }
  }
}
