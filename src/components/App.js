import React, { useState } from "react"; 
import CategoryFilter from "./CategoryFilter"; // Import category filter component
import NewTaskForm from "./NewTaskForm"; // Import form component for adding new tasks
import TaskList from "./TaskList"; 
// Import task list component

import { CATEGORIES, TASKS } from "../data";
 // Import predefined categories and tasks

function App() {
  // State for storing tasks and selected category

  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle deleting a task by index
  const handleDeleteTask = (indexToRemove) => {
    setTasks(prevTasks => prevTasks.filter((_, index) => index !== indexToRemove));
  };

  // Function to handle form submission (adding new task)
  const handleTaskFormSubmit = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask]); // Add the new task to the list
  };

  // Filter tasks based on the selected category
  const filteredTasks =
    selectedCategory === "All" ? tasks : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      {/* Display Category Filter component */}
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory} // Update selected category
      />
      {/* Display New Task Form component */}
      
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit} 
        // Add new task
      />
      {/* Display Task List component */}
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
