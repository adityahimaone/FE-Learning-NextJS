import React from "react";
import AppContext, { useAppContext } from "../context/appContext";

export default function ReducerState() {
  const { reducer } = useAppContext(AppContext);
  const [state, dispatch] = reducer;

  return (
    <div className="flex flex-col justify-center items-center border-t-2 py-10">
      <h1 className="text-xl">State Management using Reducer</h1>
      <span>Theme: {state.theme}</span>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "setTheme" });
        }}
        className="bg-blue-400 px-2 rounded-md text-white w-fit hover:bg-blue-700"
      >
        Switch Theme
      </button>
    </div>
  );
}
