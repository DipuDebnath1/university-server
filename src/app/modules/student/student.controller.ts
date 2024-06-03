 import { StudentServices } from './student.service';
import sendResponse from '../../utills/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utills/catchAsync';


const getAllStudents = catchAsync(async (req, res) => {
     const result = await StudentServices.getAllStudentsFromDB();
 
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'success',
      data:result
    })
 
});

const getSingleStudent = catchAsync(
  async (req, res) => {
       const { studentId } = req.params;
      const result = await StudentServices.getSingleStudentFromDB(studentId);
      sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'success',
        data:result
      })
  }
);

export const StudentControllers = {
   getAllStudents,
  getSingleStudent,
};
