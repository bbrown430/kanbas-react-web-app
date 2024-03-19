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
      <li className="list-group-item">
          <button
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
          <button
            onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }/>
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }/>
        </li>
      <hr/>
      <ul className="list-group">
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <h3>{module.name}</h3>
              <p>{module.description}</p>
              <button
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;