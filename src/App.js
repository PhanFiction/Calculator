import './App.css';
import React from 'react';
import Button from './buttons/button';
import Screen from './screen/screen';

const arr = [];

export default function App()
{
  const operators = ["clear", "plus-minus", "percentage", "times", "sub", "add", "equal", "div"];
  const [value, setValue] = React.useState("0");
  const [oldVal, storeOld] = React.useState([]);
  const [ops, setOperator] = React.useState(null);

  const handleClick = (e) => 
  {
    if(String(value).includes('.') !== e.target.value.includes('.'))
    {
      setValue(value + e.target.value);
    }

    if(!e.target.value.includes('.'))
    {
      if(value === "0")
      {
        setValue((parseInt(value + e.target.value)).toString()); 
      }
      
        // if operator i not null, set the display to be button clicked
      if(value !== "0")
      {
        setValue(value + e.target.value); // if ops is null then concat string 
      }
    }
    if(operators.includes(e.target.name)) calculateResult(e.target.name);
  }
  

  const calculateResult = (operators) => {
    let num = parseInt(value); // parsing old value
    if(operators === "plus-minus")return setValue(num * -1);
    if(operators === "clear") return setValue("0");
    if(operators === "percentage") return setValue(num / 100);

    if(operators === "add")
    {
      // if the ops is the same, we add them
      oldVal.push(parseFloat(value));
      setValue("0");
      setOperator("+");
      return;
    }

    if(operators === "sub")
    {
      oldVal.push(parseFloat(value));
      setValue("0");
      setOperator("-");
      return;
    }

    if(operators === "div")
    {
      oldVal.push(parseFloat(value));
      setValue("0");
      setOperator("/");
    }

    if(operators === "times")
    {
      oldVal.push(parseFloat(value));
      setValue("0");
      setOperator("*");
    }

    if(operators === "equal")
    {
      if(ops === "+")
      {
        setValue([...oldVal].reduce((a,b)=> a+b) + parseFloat(value));
      }
      if(ops === "-")
      {
        setValue([...oldVal].reduce((a,b) => a-b) - parseFloat(value));
      }
      if(ops === "/")
      {
        setValue([...oldVal].reduce((a,b) => a/b) / parseFloat(value));
      }
      if(ops === "*")
      {
        setValue([...oldVal].reduce((a,b) => a * b) * parseFloat(value));
      }

      storeOld([]);
      setOperator(null);
      return;
    }
  }

  return(
    <div className="center">
        <div className="calculator-container">
          <div className="wrapper">
              <Screen value={value} handleClick={handleClick}/>
              <Button buttonClick={handleClick}/> 
          </div>
        </div>
    </div>
  );
}