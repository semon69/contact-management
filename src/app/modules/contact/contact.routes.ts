import express from 'express';
import { contactController } from './contact.controller';

const router = express.Router();

router.post('/add', contactController.addContact)
router.get('/', contactController.getAll)
router.get('/:id', contactController.getSingleContact)
router.patch('/:id', contactController.updateContact)
router.delete('/:id', contactController.deleteContact)

export const ContactRoutes = router