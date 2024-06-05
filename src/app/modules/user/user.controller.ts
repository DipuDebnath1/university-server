import { RequestHandler  } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utills/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utills/catchAsync";

const createStudent:RequestHandler =catchAsync( async (req, res, next) => {  
   
     const {password, student: payload } = req.body;
    const result = await UserServices.createStudentIntoDB(password, payload);

    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'success',
      data:result
    })
 
})
  

export  const UserController = {
    createStudent
  }