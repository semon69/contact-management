import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { contactService } from './contact.service';
import { Request, Response } from 'express';

const addContact = catchAsync(async (req: Request, res: Response) => {
  const result = await contactService.addContact(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contact added successfully !',
    data: result,
  });
});
const getAll = catchAsync(async (req: Request, res: Response) => {
  const result = await contactService.getAll();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contact data fetched successfully !',
    data: result,
  });
});
const getSingleContact = catchAsync(async (req: Request, res: Response) => {
  const result = await contactService.getSingleContact(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A contact data fetched successfully !',
    data: result,
  });
});
const updateContact = catchAsync(async (req: Request, res: Response) => {
  const result = await contactService.updateContact(req.body, req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contact data updated successfully !',
    data: result,
  });
});

const changeFavoriteStatus = catchAsync(async (req: Request, res: Response) => {
  // console.log(req.body);
  const { isFavourite } = req.body;
  const { id } = req.params;
  const result = await contactService.changeFavoriteStatus(isFavourite, id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Favourite list updated successfully !',
    data: result,
  });
});

const deleteContact = catchAsync(async (req: Request, res: Response) => {
  const result = await contactService.deleteContact(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contact deleted successfully !',
    data: result,
  });
});

export const contactController = {
  addContact,
  getAll,
  getSingleContact,
  updateContact,
  deleteContact,
  changeFavoriteStatus,
};
