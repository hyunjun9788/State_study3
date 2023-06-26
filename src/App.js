
import './App.css';
import {useState} from "react";

function App() {

  const [input,setInput] = useState('')

  const inputChangeHandler = (e) =>{
    setInput(e.target.value)
  }
  return (
    <div className="App">
    <input onChange={inputChangeHandler}/>
      <div className='content'>입력값: {input}</div>
    </div>
  );
}

export default App;
