import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return { ...state, count: 0 };
    case "plus":
      return { ...state, activity: "Plus" };
    case "minus":
      return { ...state, activity: "Minus" };
    default:
      return state;
  }
}

const initState = {
  count: 0,
  activity: "Null",
};

export default function TryReducer() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <>
      <div className="flex justify-center border-t-2 my-4">
        <h1 className="text-xl">Example Reducer</h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        <button
          type="button"
          onClick={() => dispatch({ type: "increment", payload: 1 })}
          className="bg-green-400 px-2 py-1 rounded-l-md"
        >
          +
        </button>
        <span className="bg-blue-400 px-4 py-1">{state.count}</span>
        <button
          type="button"
          onClick={() => dispatch({ type: "decrement", payload: 1 })}
          className="bg-red-400 px-2 py-1 rounded-r-md"
        >
          -
        </button>
      </div>
      <div className="flex justify-center flex-col my-5 items-center">
        <span>{state.activity}</span>
        <button
          type="button"
          onClick={() => dispatch({ type: "reset" })}
          className="bg-blue-400 px-2 py-1 rounded-md"
        >
          Reset
        </button>
      </div>
    </>
  );
}
