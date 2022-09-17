//dependencies
import React, { Component, useState, useEffect } from 'react';

const taskCreator = () => {

  // declare state for add task field
  const [task, setTask] = useState('');

  return (
    <div className="taskSub">
      
      <form className="submitLine">
        <label className="newTask">
          <div id="sprint">New Sprint:</div>
       
          <input
            type='text'
            id="textBox"
            placeholder='Set up webpack...'
            required
            value={task}
            onChange={(e) => setTask(e.target.value)}            
          />
        </label>
        <button className="newTask" id="sprintBut" >
        Add Sprint
        </button>
        <p>{task}</p>
      </form>      
    </div>
  );
};

export default taskCreator;
