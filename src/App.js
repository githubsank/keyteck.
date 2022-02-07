import React from 'react';
import './App.css';
import profile from "./image/a.png";


function App() {
  return (
    
      <div className="main">
        <div>
          <div className="imgs">
            
            <img src={profile} alt="profile" className="profile"/>
           
          </div>
          <div>
            <input type="text"placeholder="Admin id" className="name"/>
          </div>
          <div>
            <input type="text" placeholder="password" className="name"/>
          </div> 
            <br></br>
            <br></br>
          <button class="button">Login</button>
        </div>
      </div>
         
  );
}

export default App;
