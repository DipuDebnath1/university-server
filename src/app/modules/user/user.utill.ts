import { TAcademicSemester } from "../academicSemester/academicSemester.interface"
import { User } from "./user.model"

const findLatestStudentID = async()=>{
    const latestStudent = await User.findOne(
        {
            role:'student',
        },{
            id:1,
            _id:0
        }
    ).sort({createdAt:-1}).lean()

    return latestStudent?.id ? latestStudent.id : undefined
}




export const generatedStudentId = async (payLoad:TAcademicSemester)=>{
    let currentId = (0).toString()
    // await findLatestStudent() ||
    const  latestStudentId = await findLatestStudentID()
    const  latestStudentSemesterCode = latestStudentId?.substring(4,6)
    const  latestStudentSemesterYear = latestStudentId?.substring(0,4)
    const  currentStudentSemesterCode = payLoad.code
    const  currentStudentSemesterYear = payLoad.date

//     console.log({latestStudentId,
//         latestStudentSemesterCode ,
// latestStudentSemesterYear ,
// currentStudentSemesterCode,
// currentStudentSemesterYear
//     });
    

    if (latestStudentId && 
        latestStudentSemesterCode=== currentStudentSemesterCode && 
        latestStudentSemesterYear===currentStudentSemesterYear) 
        {

        currentId = latestStudentId.substring(6)
    }

    let incrementID = (Number(currentId)+1).toString().padStart(4, '0')
    
    incrementID = `${payLoad.date}${payLoad.code}${incrementID}`

    return incrementID   
}
