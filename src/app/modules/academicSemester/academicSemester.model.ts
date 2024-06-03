import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import { academicSemesterCode, Months, academicSemesterName } from "./acadmicSemester.constant";
 
const academicSemesterSchema = new Schema<TAcademicSemester>({
    name: {
        type:String,
        enum:academicSemesterName,
        required:true
    },
    code: {
        type:String,
        enum:academicSemesterCode,
        required:true
    },
    date: {
        type:String,
        required:true
    },
    startMonth:{
        type:String,
        enum:Months
    },
    endMonth:{
        type:String,
        enum:Months
    }
},
{
  timestamps:true  
})

academicSemesterSchema.pre('save',async function(next){
    const isExist = await AcademicSemester.findOne({
        date:this.date,
        name:this.name
    })
    if (isExist) {
        throw new Error('Semester already Exist')
    }
    next()
})

export const AcademicSemester = model<TAcademicSemester>('AcademicSemester', academicSemesterSchema) 