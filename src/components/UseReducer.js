import React, { useReducer } from "react";
import "./counter.css";

const initialState = {
  firstCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCount: state.firstCount + action.value };
    case "decrement":
      return { firstCount: state.firstCount - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const UseReducer = ({ active, setActive }) => {
  const [setCount, dispatch] = useReducer(reducer, initialState);
  const changeCounterValue = (value) => {
    setCount(parseInt(value));
  };

  return (
    <div className="mainContainer">
      <h3>Counter app with UseReducer</h3>
      <div className="caption">
        <p>Subscribe $10 to talk to a Therapist Today!</p>
        <img src="./images/Mask.svg" alt="" />
      </div>
      <div className="number">
        <img src="./images/dollar.svg" alt="" />

        <input
          type="number"
          placeholder="Enter value"
          onKeyUp={(event) => {
            if (event.key === "Enter") changeCounterValue(event.target.value);
          }}
        ></input>
        <div className="input">
          <h2
            className={
              setCount.firstCount > 0
                ? "positive"
                : setCount.firstCount < 0
                ? "negative"
                : null
            }
          >
            {setCount.firstCount}
          </h2>
        </div>
        <div className="btns">
          <div className="add">
            <button onClick={() => dispatch({ type: "increment", value: 2 })}>
              +
            </button>
          </div>
          <div className="subtract">
            <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
              -
            </button>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="counter2">
          <div onClick={() => setActive(!active)}>Click me!</div>
        </div>
        <div className="reset">
          <button onClick={() => dispatch({ type: "reset" })}>
            <img src="./images/reload.svg" alt="" />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
