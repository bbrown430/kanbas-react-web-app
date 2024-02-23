import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import "./index.css";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";


function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
        <div className="d-none d-md-block">
            <div className="course-header pt-3 ps-3">
                <HiMiniBars3 className="fs-2 me-3"/>
                <h2 className="m-0"> Course {course?.name}</h2>
            </div>
            <hr />
        </div>
        <div className="d-flex">
            <CourseNavigation />
            <div className="flex-grow-1">
                <div
                className="bottom-0 end-0 p-2"
                style={{ left: "320px", top: "50px" }} >
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home/>} />
                    <Route path="Modules" element={<Modules/>} />
                    <Route path="Piazza" element={<h1>Piazza</h1>} />
                    <Route path="Zoom" element={<h1>Zoom</h1>} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                    <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                    <Route path="Grades" element={<h1>Grades</h1>} />
                    <Route path="People" element={<h1>People</h1>} />
                </Routes>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Courses
