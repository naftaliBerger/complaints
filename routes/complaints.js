import express from 'express';
import { createComplaint,fetchAllComplaints} from '../controllers/complaintsController.js';

const router = express.Router();

router.post('/', createComplaint);
router.get('/', fetchAllComplaints);

export default router;
