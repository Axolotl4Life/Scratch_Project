//dependencies
import React, { Component, useState, useEffect } from 'react';

//login/signup box
const FormContainer = () => {
  //what information do I need??
  //how do I render this information?
  //Need to use hooks here
  //Need to use a form here
  //Need to verify and/or create user here
  //Need to store user information in Session cookie for use by other components
  //Need to move this div out of view once logged in

  //declare states for username and password
  const [date, setDate] = useState('');
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [weight, setWeight] = useState('');
  
  //fetch request to send data to backend
  const handleSubmit = () => {
    const submitData = {
      
    }
    return fetch({
      method: 'POST',
      body: JSON.stringify(submitData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json());
  }


  return (
    <div>
      <h2>Log Workout</h2>
      <form>
      <label>
        Date:
        <input
          type='text'
          placeholder='Date'
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        Exercise:
        <input
          type='text'
          placeholder='What kind of exercise?'
          onChange={(e) => setExercise(e.target.value)}
          required
        />
      </label>
      <label>
        Duration:
        <input
          type='text'
          placeholder='Time'
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </label>      <label>
        Weight:
        <input
          type='text'
          placeholder='Enter your weight'
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </label>
      <button onClick={() => submit({ date: date, exercise: exercise, duration: duration, weight: weight })}>
        Submit
      </button>
    </form>
    </div>
  );
};

export default FormContainer;
