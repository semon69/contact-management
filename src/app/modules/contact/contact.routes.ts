import express from 'express';
import { contactController } from './contact.controller';
import validateRequest from '../../middlewares/validateRequest';
import { zodContactSchema } from './contact.validation';

const router = express.Router();

router.post(
  '/add',
  validateRequest(zodContactSchema),
  contactController.addContact,
);
router.get('/', contactController.getAll);
router.get('/:id', contactController.getSingleContact);
router.patch('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);

export const ContactRoutes = router;
