import React, {  useState, useEffect } from 'react';
import TaskContainer from './TaskContainer.jsx';


const MainContainer = () => {
  const [task, setTask] = useState('');
  const [taskSubmission, setTaskSubmission] = useState('');
  // declare state for add task field

  // handler function for submission > fetch post

  const submitTaskToDB = () => {
    setTaskSubmission(task);
    console.log('inside submitTaskToDB');
    fetch('/projects/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: ''//state
    })
  }

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
            // value={task}
            onChange={(e) => setTask(e.target.value)}            
          />
        </label>
        {/* <input type='submit' value={task}>Add Sprint</input> */}
        
        {/* <button className="newTask" id="sprintBut" >
        Add Sprint
        </button> */}
      
      </form> 
      <TaskContainer todo={task} />      
    </div>
  );
};



  

export default MainContainer;