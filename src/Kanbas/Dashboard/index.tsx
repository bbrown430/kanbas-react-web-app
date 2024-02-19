import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaEdit } from "react-icons/fa";
import './index.css';

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
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