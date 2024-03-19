import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import './index.css';

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse } : {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
   {
    return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div className="d-flex">
        <div className="flex-row" style={{ flexGrow: 1 }}>
          <div className="row row-cols-1 row-cols-md-5 g-4 pt-3">
            {courses.map((course) => (
              <div key={course._id} className="col card-col">
                <div className="card">
                  <img src={`/images/${course.image}`} className="card-img-top card-img-limited"/>
                  <div className="card-body">
                    <Link className="card-title card-title-text" to={`/Kanbas/Courses/${course._id}/Home`}>
                      {course._id} {course.name}</Link>
                    <p className="card-text">{course.number}</p>
                      <FaEdit className="me-2"  style={{color: "grey"}} onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}/>
                      <FaTrashAlt style={{color: "grey"}} onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="g-4 pt-3 ms-1 d-none d-md-block">
          <h5>Course Manager</h5>
          <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
          <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
          <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
          <button className="btn btn-success me-2" onClick={addNewCourse} >
            Add
          </button>
          <button className="btn btn-info" onClick={updateCourse} >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;