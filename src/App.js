import './App.css';
import {useState} from "react";
import Input from "./components/Input";
import Content from "./components/Content";
import './components/Input.css'

function App() {

    const [input, setInput] = useState('')

    const inputChangeHandler = (e) => {
        setInput(e.target.value)
    }
    return (
        <div className="App">
            <Input inputChangeHandler={inputChangeHandler}/>
            <Content input={input}/>

        </div>
    );
}

export default App;
