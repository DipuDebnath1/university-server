 import httpStatus from "http-status";
import catchAsync from "../../utills/catchAsync";
import sendResponse from "../../utills/sendResponse";
import { AcademicSemesterServices } from "./academicSemester.services";


const createAcademicSemester = catchAsync(async(req, res) =>{

    const result = await AcademicSemesterServices.createAcademicSemesterDB(req.body)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"semester create successfully",
        data: result
    })
})

const getAllSemesterDB = catchAsync(async(req, res) =>{

    const result = await AcademicSemesterServices.GetAllSemesterDB()

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"all semester find successfully",
        data: result
    })
})
const getSingleSemesterDB = catchAsync(async(req, res) =>{
    const {semesterId} = req.params 
    const result = await AcademicSemesterServices.GetSingleSemesterDB(semesterId)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"semester find successfully",
        data: result
    })
})
const UpdateSemesterDB = catchAsync(async(req, res) =>{
    const {semesterId} = req.params 
    const semester = req.body 
    const result = await AcademicSemesterServices.updateSemesterDB(semesterId, semester)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"semester find successfully",
        data: result
    })
})

export const AcademicSemesterControllers = {
    createAcademicSemester,
    getAllSemesterDB,
    getSingleSemesterDB,
    UpdateSemesterDB
}