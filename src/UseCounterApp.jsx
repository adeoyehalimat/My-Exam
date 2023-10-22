import { useState } from "react";
// import {Link} from 'react-router-dom';

const useCounterApp = () => {
  const [count, setCount] = useState(0);
  const [settingValue, setSettingValue] = useState('');

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const setValue = (value) => {
    setCount(value);
  };

  const handleReset = () => {
    setCount(0);
  };
  const handleChangeValue = (e) => {
    setSettingValue(e.target.value);
    e.target.value = settingValue
  };
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
