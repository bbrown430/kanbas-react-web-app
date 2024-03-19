import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import { FaEdit } from "react-icons/fa";
import './index.css';

function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg"
  });
  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div className="flex-row">
        <div className="row row-cols-1 row-cols-md-5 g-4 pt-3">
          {courses.map((course) => (
            <div key={course._id} className="col card-col">
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top card-img-limited"/>
                <div className="card-body">
                  <Link className="card-title card-title-text" to={`/Kanbas/Courses/${course._id}/Home`}>
                    {course._id} {course.name}</Link>
                  <p className="card-text">{course.number}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} style={{color: "grey"}}>
                        <FaEdit/>
                    </Link>
                    <button onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                      Edit
                    </button>
                    <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                    </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;