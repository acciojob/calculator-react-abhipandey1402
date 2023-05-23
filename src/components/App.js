import React, {useState} from "react";

const App = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    function add(){
        setResult(parseFloat(num1) + parseFloat(num2));
        setNum1('');
        setNum2('');
    }
    function sub(){
        setResult(parseFloat(num1) - parseFloat(num2));
        setNum1('');
        setNum2('');
    }
    function mul(){
        setResult(parseFloat(num1) * parseFloat(num2));
        setNum1('');
        setNum2('');
    }
    function div(){
        setResult(parseFloat(num1) / parseFloat(num2));
        setNum1('');
        setNum2('');
    }

    return (
        <div>
            <input type='number' id="num1" onChange={(e) => setNum1(e.target.value)} value={num1}></input>
            <input type='number' id="num2" onChange={(e) => setNum2(e.target.value)} value={num2}></input>
            <button id="add" onClick={add}>+</button>
            <button id="sub" onClick={sub}>-</button>
            <button id="mul" onClick={mul}>*</button>
            <button id="div" onClick={div}>/</button>
            <br/>
            <h1>{result}</h1>
        </div>
    )
}

export default App;