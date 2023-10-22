
import useCounterApp from "./UseCounterApp";
import { Link } from "react-router-dom";
import "./styles.css";
// the custom hook implementation

export default function Counter() {
  const {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
    settingValue,
    handleChangeValue,
    handleSetValue
  } = useCounterApp(0);

  return (
    <section className="Counter-container">
      <div className="App">
        <>
          <div className=" Counter-button">
          <button className="Increment" onClick={handleIncrement}> + </button>
          <p className="Counts" >  {count} </p>
          <button className="Decrement"  onClick={handleDecrement}> - </button>
          </div>
          <br/>
          <br/>
          
        
          <div className=" Alternate-buttons">
          <input
            type="number"
            value={settingValue}
            onChange={handleChangeValue}
           /> <span><button className="Setvalue" onClick={handleSetValue}> Setvalue </button></span>
          
          <button className="Reset"onClick={handleReset}> Reset </button>
          </div>
          <p>
            {" "}
            <Link to="/"> Home Page </Link>{" "}
          </p>
        </>
      </div>
    </section>
  );
}
