//dependencies
import React, { Component, useState, useEffect } from 'react';
let global;

// this.props.first
const taskCreator = (props) => {
  const [task, setTask] = useState('');
  // declare state for add task field

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

const TaskContainer = (props) => {

  // function CreateTask({ addTask }){
    // const [task, setTask] = useState('');

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     if(!value) return;

  //     addTask(value);
  //     setValue(" ");
  //   }
  // }

  return (
    <div id="taskContainer">
      <div className="toBe" id="leftBox">
      To Be Started
      <div></div>
      
        <button className="buttons" onClick={() => submit({ task: task })}>
        Move 
        </button>
        <button>
        Edit
        </button>
        <button>
        Delete
        </button>
        <div>
          {/* {this.props.value} */}
        </div>
      </div>
      <div className="toBe" id="middleBox">
      In Progress    
        <button className="buttons" onClick={() => submit({ task: task })}>
        Move
        </button>
        <button>
        Edit
        </button>
        <button>
        Delete
        </button>
      </div>
      <div className="toBe" id="rightBox">
      Completed
        <button className="buttons" onClick={() => submit({ task: task })}>
        Completed
        </button>
        <button>
        Edit
      </button>
      <button>
        Delete
      </button>
      </div>
      </div>
  );
};

export default taskCreator;
