import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';

function App() {
  return (
    <div>
      <Clock continent ='Africa' city='Nairobi'/><hr />  
      <Clock continent ='Europe' city='London'/><hr />    
      <Clock continent ='Australia' city='Sydney'/><hr />    
      <Clock continent ='America' city='New_York'/><hr />        
    </div>
  );
}

export default App;
