import React from "react";
import AppContext, { useAppContext } from "../context/appContext";
import ToggleTheme from "./ToggleTheme";

export default function DisplayTheme() {
  const { context } = useAppContext(AppContext);

  return (
    <div className="text-center flex flex-col  justify-center border-t-2 my-5">
      <div>
        <span>DisplayTheme : {context.switchTheme}</span>
      </div>
      <div className="my-2">
        <ToggleTheme />
      </div>
    </div>
  );
}
