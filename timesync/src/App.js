import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div id = "add_members">
      <h1>Add Members</h1>
      <p>Name</p>
      <input type="text" id="name"></input>
      <p>City</p>
		  <input type="text" id="city"></input>
      <br></br>
      <p></p>
      <button type = "button" id = "add" >ADD</button>
	  	<button type = "button" id = "delete">DELETE</button>
		  <button type = "button" id = "finish">FINISH</button>
    </div>
  );
}

export default App;
