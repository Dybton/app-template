import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      return res.status(200).json({ message: "Hello, world!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to process PDF" });
    }
  } else if (req.method === "POST") {
    try {
      const fileBuffer = req.body;

      res.status(200).json({ success: true, data: fileBuffer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error processing file upload" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
