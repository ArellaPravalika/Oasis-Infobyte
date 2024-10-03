import { useState } from "react";

function TaskItem({ task, completeTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="task-item">
      <div>
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <p>{task.text}</p>
        )}
        <p className="timestamp">Added: {task.createdAt}</p>
        {task.isCompleted && <p className="timestamp">Completed: {task.completedAt}</p>}
      </div>
      <div className="actions">
        <button onClick={() => completeTask(task.id)}>
          {task.isCompleted ? "Undo" : "Complete"}
        </button>
        <button onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
