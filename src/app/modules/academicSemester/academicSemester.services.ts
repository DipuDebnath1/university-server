import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";
import { academicSemesterNameCodeMapper } from "./acadmicSemester.constant";

// createAcademicSemesterDB 
const createAcademicSemesterDB = async(payload:TAcademicSemester) =>{
    if(academicSemesterNameCodeMapper[payload.name] !== payload.code){
        throw new Error('Invalid Semester Code!!!')
    }
    const result = await AcademicSemester.create(payload)
    return result
}

// GetAllSemesterDB
const GetAllSemesterDB = async() =>{
    const result = await AcademicSemester.find()
    return result
}
 
// Get SemesterDB
const GetSingleSemesterDB = async(id:string) =>{
    const result = await AcademicSemester.findById(id)
    return result
}
// update SemesterDB
const updateSemesterDB = async(id:string,semester:Partial<TAcademicSemester> ) =>{

    if(
        semester.name && semester.code && academicSemesterNameCodeMapper[semester.name] !== semester.code
    ){
        throw new Error('semester code not valid...')
    }

    const result = await AcademicSemester.findOneAndUpdate({_id:id}, semester,{new:true})
    return result
}


 
export const AcademicSemesterServices = {
    createAcademicSemesterDB,
    GetAllSemesterDB,
    GetSingleSemesterDB,
    updateSemesterDB
}