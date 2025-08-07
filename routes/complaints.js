import express from 'express';
import { createComplaint,fetchAllComplaints,checkAdmin} from '../controllers/complaintsController.js';

const router = express.Router();

router.post('/', createComplaint);
router.get('/', fetchAllComplaints);
router.post('/admin',checkAdmin); 
export default router;
