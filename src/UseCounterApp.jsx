import { useState } from "react";
// import {Link} from 'react-router-dom';
// implementation of the custom hook
const useCounterApp = () => {
   // setting of state to initial count
  const [count, setCount] = useState(0);
  // setting of state to handle the input value
  const [settingValue, setSettingValue] = useState('');


  // creation of  function to handle increment event
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  
  // creation of  function to handle decrement event
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };


  // creation of  function to set value
  const setValue = (value) => {
    setCount(value);
  };


  // creation of  function to handle reset event
  const handleReset = () => {
    setCount(0);
  };

  // creation of  function to handle input event change
  const handleChangeValue = (e) => {
    setSettingValue(e.target.value);
    e.target.value = settingValue
  };
  // creation of  function to handle set value event
  const handleSetValue = (e) => {
    setValue(+settingValue)
    setSettingValue ('');
  };



  return {
    count,
    handleIncrement,
    handleDecrement,
    setValue,
    handleReset,
    settingValue,
    handleChangeValue,
    handleSetValue
  };
};

export default useCounterApp;
