import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import store from "./store";
import { Provider } from "react-redux";
import {Routes, Route, Navigate}
  from "react-router";
import { Link } from "react-router-dom";
function Labs() {
 return (
    <Provider store={store}>
      <div>
        <Nav/>
        <Link to="/Labs/a3">Assignment 3</Link> |
        <Link to="/Labs/a4">Assignment 4</Link>
        <Routes>
          <Route path="/"
            element={<Navigate
                      to="a3"/>}/>
          <Route path="a3"
            element={<Assignment3/>}/>
          <Route path="a4"
            element={<Assignment4/>}/>
        </Routes>
      </div>
   </Provider>
 );
}
export default Labs;

