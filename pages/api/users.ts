// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: { name: string };
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    console.log(req.body, 'POST');
    res.status(200).json({ data: req.body });
  } else if (req.method === 'GET') {
    res.status(200).json({ data: { name: 'John Doe' } });
  } else {
    // Handle any other HTTP method
  }
}
