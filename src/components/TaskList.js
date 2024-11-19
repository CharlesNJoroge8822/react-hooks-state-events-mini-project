import React from "react";
import Task from "./Task"; // Importing the Task component to use for each task

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {/* Check if there are tasks to display */}
      {tasks.length ? (
        // If there are tasks, map over them and display each task
        tasks.map((task, index) => (
          <Task
            key={index} // Unique identifier for each task
            category={task.category} // Pass task category to Task component
            text={task.text} // Pass task text to Task component
            onDelete={() => onDeleteTask(index)} // Pass the delete function with the task's index
          />
        ))
      ) : (
        // If no tasks, display this message
        <p>No tasks available.</p>
      )}
    </div>
  );
}

export default TaskList;
