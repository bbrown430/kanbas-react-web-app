import { FaEllipsisV} from "react-icons/fa";

function Buttons() {
    return(
        <div className="text-end">
            <button className="btn btn-secondary">Collapse All</button>
            <button className="btn btn-secondary ms-1">View Progress</button>
            <select className="publish-select form-select ms-1">
                <option selected>Publish All</option>
                <option value="moditems">Publish All Modules and Items</option>
                <option value="modonly">Publish All Modules</option>
                <option value="unpub">Unpublish All Modules</option>
                </select>
            <button className="btn btn-danger ms-1">+ Module</button>
            <button className="btn btn-secondary ms-1"><FaEllipsisV/></button>
        </div>
    )
}
export default Buttons