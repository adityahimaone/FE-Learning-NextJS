import React, { useState, useEffect, useMemo, useReducer } from "react";
import AppContext from "./appContext";

export default function AppProvider({ children }) {
  const initialState = {
    user: {},
    theme: "dark",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "setUser":
        return { ...state, user: action.payload };
      case "setTheme":
        return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
      default:
        return state;
    }
  };

  const [user, setuser] = useState({});
  const [switchTheme, setSwitchTheme] = useState("light");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setuser(data));

    const data = {
      username: "Nguyen Van A",
    };
    dispatch({
      type: "setUser",
      payload: data,
    });
  }, []);

  const appReducerValue = useMemo(() => [state, dispatch], [state]);

  const appContextValue = useMemo(
    () => ({
      user,
      setuser,
      switchTheme,
      setSwitchTheme,
      state,
      dispatch,
    }),
    [user, switchTheme]
  );

  return (
    <AppContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ context: appContextValue, reducer: appReducerValue }}
    >
      {children}
    </AppContext.Provider>
  );
}
