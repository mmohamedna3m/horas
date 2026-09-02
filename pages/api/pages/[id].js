import connectDB from '@/lib/mongodb';
import Page from '@/lib/models/Page';

export default async function handler(req, res) {
  await connectDB();
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const page = await Page.findById(id);
      if (!page) {
        return res.status(404).json({ error: 'Page not found' });
      }
      res.status(200).json(page);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'PUT') {
    try {
      const page = await Page.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(page);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      await Page.findByIdAndDelete(id);
      res.status(200).json({ message: 'Page deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
