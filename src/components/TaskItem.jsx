function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
      <span
        onClick={() => toggleTask(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
