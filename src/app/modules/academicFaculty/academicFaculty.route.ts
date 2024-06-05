import express from 'express';
 import { AcademicFacultyControllers } from './academicFaculty.controller';
import { academicFacultyValidationSchema } from './academicFaculty.validation';
import validationRequest from '../../../midlewere/validationRequest';
 
const router = express.Router();

router.post(
  '/create-academic-faculty',
  validationRequest(
    academicFacultyValidationSchema.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);

router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty);

router.patch(
  '/:facultyId',
  validationRequest(
    academicFacultyValidationSchema.updateAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.updateAcademicFaculty,
);

router.get('/', AcademicFacultyControllers.getAllAcademicFaculties);

export const AcademicFacultyRoutes = router;