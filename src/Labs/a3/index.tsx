import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import JavaScript from "./JavaScript"
import Styles from "./Styles";
import Add from "./add";
import PathParameters from "./routing/PathParameters";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";
import { LabState } from "../store";


function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
    return (
      <div className="container">
        <h1>Assignment 3</h1>
        <ul className="list-group">
          {todos.map((todo) => (
            <li className="list-group-item" key={todo.id}>
              {todo.title}
            </li>
          ))}
        </ul>
        <TodoList/>
        <Add a={3} b={4} /> <br />
        <Highlight>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ipsa quibusdam laboriosam esse est excepturi minus ea nulla id itaque, eius mollitia sint dolore saepe totam eos dolores doloribus eum!
        </Highlight>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <PathParameters/>
        <JavaScript/>
      </div>
    );
  }
  export default Assignment3;
  