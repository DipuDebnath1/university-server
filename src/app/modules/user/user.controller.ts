import { RequestHandler  } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utills/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utills/catchAsync";

const createStudent:RequestHandler =catchAsync( async (req, res, next) => {
   
     const {password, student: studentData } = req.body;
    const result = await UserServices.createStudentIntoDB(password, studentData);

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