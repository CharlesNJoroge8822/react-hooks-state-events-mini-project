import React from "react";

function Task({ category, text, onDelete }) {
  return (
    <div className="task">

      {/* Display the task's category */}
      <div className="label">{category}</div>

      {/* Display the task's text */}
      <div className="text">{text}</div>
      
      {/* Button to delete the task */}
      <button className="delete" onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;
