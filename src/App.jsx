import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // 🌍 Apply theme to whole page
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <Dashboard
      tasks={tasks}
      addTask={addTask}
      deleteTask={deleteTask}
      toggleTask={toggleTask}
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
    />
  );
}

export default App;
