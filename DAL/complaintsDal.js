import { connectDB } from '../db/connect.js';

export async function addComplaint(complaintData) {
  const db = await connectDB();
  return await db.collection('Complaints').insertOne({
    category: complaintData.category,
    message: complaintData.message,
    createdAt: new Date(),
  });
}

export async function getAllComplaints() {
  const db = await connectDB();
  return await db.collection('Complaints').find().toArray();
}
