import { z } from "zod";
import { Months, academicSemesterCode, academicSemesterName } from "./acadmicSemester.constant";
  
const createAcademicSemesterValidation = z.object({
    body:z.object({
        name:z.enum([...academicSemesterName] as [string, ...string[]]),
        code:z.enum([...academicSemesterCode] as [string, ...string[]]),
        date:z.string(),
        startMonth:z.enum([...Months] as [string, ...string[]]),
        endMonth:z.enum([...Months] as [string, ...string[]])

    })
})
const updateAcademicSemesterValidation = z.object({
    body:z.object({
        name:z.enum([...academicSemesterName] as [string, ...string[]]).optional(),
        code:z.enum([...academicSemesterCode] as [string, ...string[]]).optional(),
        date:z.string().optional(),
        startMonth:z.enum([...Months] as [string, ...string[]]).optional(),
        endMonth:z.enum([...Months] as [string, ...string[]]).optional()

    })
})


export const AcademicSemesterValidation = {
    createAcademicSemesterValidation,
    updateAcademicSemesterValidation
}