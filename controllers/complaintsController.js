import { addComplaint,  getAllComplaints} from '../DAL/complaintsDal.js';

export async function createComplaint(req, res) {
  try {
    const { category, message } = req.body;

    if (!category || !message) {
      return res.status(400).json({ error: 'Category and message are required' });
    }

    await addComplaint({ category, message });

    res.status(201).json({ message: 'The complaint was successfully added.' });
  } catch (error) {
    console.error('Error creating complaints:', error);
    res.status(500).json({ error: ' Error creating complaints' });
  }
}


export async function fetchAllComplaints(req, res) {
  try {
    const complaints = await getAllComplaints();
    res.json(complaints);
  } catch (error) {
    console.error('Error receiving complaints:', error);
    res.status(500).json({ error: 'Error receiving complaints' });
  }
}
