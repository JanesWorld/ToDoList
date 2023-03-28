import AddTask from "./AddTask";
import "./App.css";
import Layout from "./Layout";
import TaskHolder from "./TaskHolder";
import TaskInput from "./TaskInput";

// 3 Tabs required: Now, Later, Backlog
// User can click a button to add task
// User can check a box to complete a task
// User is able to delay a task to either Later or Backlog
// User is able to either put in the now, later or backlog bucket
// User is able to delete each task
// Component required for the adding a new task action which takes in inputs (When?)
// Save list to the local storage cache to ensure its still there on reload

function App() {
  return (
    <div className="App">
      <Layout>
        <AddTask />
      </Layout>
    </div>
  );
}

export default App;
