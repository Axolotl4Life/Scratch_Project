// import e from 'express';
import React, { Component, useState, useEffect } from 'react';
import taskCreator from './FormContainer.jsx';

const TaskContainer = () => {


  // function CreateTask({ addTask }){
  //   const [task, setTask] = useState('');

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

export default TaskContainer;
