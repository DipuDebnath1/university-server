  import express from 'express'
import { UserController } from './user.controller'
import validationRequest from '../../../midlewere/validationRequest'
import studentValidation from '../student/student.validation'
   
const router = express.Router()
router.post('/create-student',validationRequest(studentValidation.createStudentValidationSchema), UserController.createStudent)
// 
 
export const UserRoutes = router