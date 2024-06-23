import { TContact } from "./contact.interface";
import Contact from "./contact.schema";

const addContact = async(payload: TContact) => {
    const { name, email, phone, address, profilePicture } = payload

    const newContact = new Contact({
      name,
      email,
      phone,
      address,
      profilePicture,
    });

    await newContact.save();
    return newContact
}

const getAll = async() => {
    const contacts = await Contact.find();
    return contacts
}

const getSingleContact = async(id: string) => {
    const contact = await Contact.findById(id);
    if (!contact) {
      throw new Error( 'Contact not found');
    }
    return contact
}

const updateContact = async(payload: Partial<TContact>, id: string) => {
    const { name, email, phone, address, profilePicture } = payload
    const updatedContact = await Contact.findByIdAndUpdate(id,
      { name, email, phone, address, profilePicture },
      { new: true }
    );
    if (!updatedContact) {
      throw new Error( 'Contact not found');
    }
    return updatedContact
}
const changeFavoriteStatus = async(isFavourite: boolean, id: string) => {

  // console.log(isFavourite);
    
    const updatedContact = await Contact.findByIdAndUpdate(id,
       {isFavourite} ,
      { new: true }
    );
    if (!updatedContact) {
      throw new Error( 'Contact not found');
    }
    return updatedContact
}

const deleteContact = async(id: string) => {
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      throw new Error( 'Contact not found');
    }
    // return updatedContact
}

export const contactService = {
    addContact,
    getAll,
    getSingleContact,
    updateContact,
    deleteContact,
    changeFavoriteStatus
}