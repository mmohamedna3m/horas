import connectDB from '@/lib/mongodb';
import Page from '@/lib/models/Page';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const pages = await Page.find({});
      res.status(200).json(pages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const page = new Page(req.body);
      await page.save();
      res.status(201).json(page);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
