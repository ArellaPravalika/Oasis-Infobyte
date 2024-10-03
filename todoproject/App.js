import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./head.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      isCompleted: false,
      createdAt: new Date().toLocaleString(),
      completedAt: null,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, isCompleted: !task.isCompleted, completedAt: new Date().toLocaleString() }
        : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const editTask = (id, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <h2>Pending Tasks</h2>
      <TaskList tasks={tasks.filter((task) => !task.isCompleted)} completeTask={completeTask} deleteTask={deleteTask} editTask={editTask} />
      <h2>Completed Tasks</h2>
      <TaskList tasks={tasks.filter((task) => task.isCompleted)} completeTask={completeTask} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;
