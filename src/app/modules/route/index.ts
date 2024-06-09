import { StudentRoutes } from "./../student/student.route";
import express from "express";
import { UserRoutes } from "../user/user.route";
import { AcademicSemesterRoute } from "../academicSemester/academicSemesterRoute";
import { AcademicFacultyRoutes } from "../academicFaculty/academicFaculty.route";
import { AcademicDepartmentRoutes } from "../academicDepartment/academicDepartment.route";
const router = express.Router();

const moduleRoute = [
  { path: "/users", route: UserRoutes },
  { path: "/students", route: StudentRoutes },
  { path: "/academic-semester", route: AcademicSemesterRoute },
  { path: "/academic-faculties", route: AcademicFacultyRoutes },
  { path: "/academic-departments", route: AcademicDepartmentRoutes },
];

moduleRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
