
import './App.css';
import React,  {useState} from 'react';

//test comment to push to git repo

function App() {
  let [ counterNum, setCounterNum ] = useState(0)
  window.setCounterNum = setCounterNum
  return (
    <div className="App">
      <header className="App-header">
 
        <p>
         { counterNum }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
