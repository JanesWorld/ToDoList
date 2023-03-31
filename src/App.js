import { useState } from "react";
import AddTask from "./AddTask";
import "./App.css";
import Layout from "./Layout";
import TaskHolder from "./TaskHolder";
import TaskInput from "./TaskInput";

function App() {
  const [todoList, setToDoList] = useState([]);
  return (
    <div className="App">
      <Layout>
        <AddTask setToDoList={setToDoList} todoList={todoList} />
        {/* <TaskHolder tasks={todoList}  /> */}
      </Layout>
    </div>
  );
}

export default App;
