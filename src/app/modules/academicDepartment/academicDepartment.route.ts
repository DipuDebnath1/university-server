import express from 'express';
 import { AcademicDepartmentControllers } from './academicDepartment.controller';
import validationRequest from '../../../midlewere/validationRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
 
const router = express.Router();

router.post(
  '/create-academic-department',
  validationRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.createAcademicDepartmemt,
);

router.get(
  '/:departmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);

router.patch(
  '/:departmentId',
  validationRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.updateAcademicDeartment,
);

router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments);

export const AcademicDepartmentRoutes = router;