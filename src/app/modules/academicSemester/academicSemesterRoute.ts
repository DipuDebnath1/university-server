 import express from 'express' 
import { AcademicSemesterControllers } from './AcademicSemesterController'
 import validationRequest from '../../../midlewere/validationRequest'
import { AcademicSemesterValidation } from './academicSemesterValidatino'

const router = express.Router()

router.post('/create-academic-semester', validationRequest( AcademicSemesterValidation.createAcademicSemesterValidation), AcademicSemesterControllers.createAcademicSemester)
router.get('/get-academic-semester',AcademicSemesterControllers.getAllSemesterDB)
router.get('/get-academic-semester/:semesterId',AcademicSemesterControllers.getSingleSemesterDB)
router.patch('/update-academic-semester/:semesterId',  validationRequest( AcademicSemesterValidation.updateAcademicSemesterValidation), AcademicSemesterControllers.UpdateSemesterDB)

export const AcademicSemesterRoute = router