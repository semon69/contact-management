import mongoose, { model } from "mongoose";
import { TContact } from "./contact.interface";

const contactSchema = new mongoose.Schema<TContact>({
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    profilePicture: { type: String, required: true },
    isFavourite: { type: Boolean, required: true, default: false },
  });
  
  const Contact = model<TContact>('Contact', contactSchema);
  
  export default Contact;