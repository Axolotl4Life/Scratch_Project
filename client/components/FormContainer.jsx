//dependencies
import React, { Component, useState, useEffect } from 'react';

const FormContainer = () => {

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
            value={task}            
            required
          />
        </label>
        <button className="newTask" id="sprintBut" onChange={(e) => setTask(e.target.value)}>
        Add Sprint
        </button>
      </form>      
    </div>
  );
};

export default FormContainer;
