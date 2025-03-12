import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchTodos } from "./features/todosSlice";

function App() {
  const state = useSelector((state) => state.todos);
  console.log("state", state);

  const dispatch = useDispatch();

  if (state.loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>

      {state.data && state.data.map((e) => <li>{e.title}</li>)}
    </div>
  );
}

export default App;
