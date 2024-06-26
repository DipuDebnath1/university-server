import { StudentModel } from "./student.model";
 
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find().populate('admissionSemester').populate({
    path:"academicDepartment",
    populate:{
      path:'academicFaculty'
    }
  });
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findById(id).populate({
    path:"academicDepartment",
    populate:{
      path:'academicFaculty'
    }
  });
  return result;
};

export const StudentServices = {
   getAllStudentsFromDB,
  getSingleStudentFromDB,
};
