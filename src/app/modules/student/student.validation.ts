import { z } from 'zod';
 
 const UserNameValidationSchema = z.object({
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
});

 const GuardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

 const LocalGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

 const createStudentValidationSchema = z.object({
  body:z.object({
    password:z.string().max(20),
    student:z.object({
    name: UserNameValidationSchema,
    gender: z.enum(['male', 'female']),
    dateOfBirth: z.string().optional(),
    email: z.string().email(),
    contactNo: z.string(),
    emergencyContactNo: z.string(),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    guardian: GuardianValidationSchema,
    localGuardian: LocalGuardianValidationSchema,
    profileImg: z.string().optional(),
    admissionSemester:z.string(),

   })
   })
});

export default {
  createStudentValidationSchema
}
 