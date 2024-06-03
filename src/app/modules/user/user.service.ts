 import { TUser } from './user.interface';
 import config from "../../config";
import { TStudent } from "../student/student.interface";
 import { User } from "./user.model";
import { StudentModel } from '../student/student.model';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';

const createStudentIntoDB = async (password:string, studentData: TStudent) => {
  console.log(password, studentData);
  
    // set student roll
    let userData:Partial<TUser> = {};
   // get not get pass 
    userData.password  = password || (config.default_pass as string)
    // userData.role
    userData.role = 'student'

    const generatedStudentId =(payLoad:TAcademicSemester)=>{

    }

    //generated id
    userData.id = '2030100001'
  
    // create a user 
    const newUser = await User.create(userData);
    // create a student 
    if (Object.keys(newUser).length) {
      studentData.id=newUser.id 
      studentData.user=newUser._id //refar id

      const newStudent = await StudentModel.create(studentData)
      return newStudent
    }
     // return newUser;
  };

  
export const UserServices = {
    createStudentIntoDB
  };
  