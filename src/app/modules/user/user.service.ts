 import { TUser } from './user.interface';
 import config from "../../config";
import { TStudent } from "../student/student.interface";
 import { User } from "./user.model";
import { StudentModel } from '../student/student.model';
 import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { generatedStudentId } from './user.utill';

const createStudentIntoDB = async (password:string, payload: TStudent) => {
  // console.log(payload);
  
    // set student roll
    let userData:Partial<TUser> = {};
   // get not get pass 
    userData.password  = password || (config.default_pass as string)
    // userData.role
    userData.role = 'student'

    const admissionSemester = await AcademicSemester.findById(payload.admissionSemester)
   
    //generated id
    userData.id = await generatedStudentId(admissionSemester)
  
    // create a user 
    const newUser = await User.create(userData);
    // create a student 
    if (Object.keys(newUser).length) {
      payload.id=newUser.id 
      payload.user=newUser._id //refar id

      const newStudent = await StudentModel.create(payload)
      return newStudent
    }
     // return newUser;
  };

  
export const UserServices = {
    createStudentIntoDB
  };
  