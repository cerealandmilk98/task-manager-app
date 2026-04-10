import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function Dashboard({
  tasks,
  addTask,
  deleteTask,
  toggleTask,
  darkMode,
  toggleDarkMode,
}) {
  return (
    <div className="app-shell">
      <div className="dashboard">
        <div className="top-bar">
          <h1>Task Manager 🚀</h1>

          <button className="theme-btn" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>
        </div>

        <TaskInput addTask={addTask} />

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      </div>
    </div>
  );
}

export default Dashboard;
