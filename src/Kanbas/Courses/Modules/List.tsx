import "./index.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Buttons from "./Buttons"
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div className="flex-fill">
      <Buttons/>
      <hr/>
      <ul className="list-group wd-modules">
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <h3>{module.name}</h3>
              {module.description}
              <span className="float-end">
                <FaEdit 
                  onClick={() => dispatch(setModule(module))}>  
                </FaEdit>
                <FaTrashAlt className="ms-2 me-2" 
                  onClick={() => dispatch(deleteModule(module._id))}>

                </FaTrashAlt>
              </span>
            </li>
          ))}
      </ul>
      <div>
        <h3>Module Manager</h3>
        <h5>Module Name</h5>
        <input className="form-control"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <h5>Module Description</h5>
        <textarea className="form-control"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
        <button className="btn btn-success me-2"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button className="btn btn-info"
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
      </div>
    </div>
  );
}
export default ModuleList;