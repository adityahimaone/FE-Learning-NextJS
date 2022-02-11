import React, { useState, useEffect, useMemo } from "react";
import AppContext from "./appContext";

export default function AppProvider({ children }) {
  const [user, setuser] = useState({});
  const [switchTheme, setSwitchTheme] = useState("light");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setuser(data));
  }, []);

  const appContextValue = useMemo(
    () => ({
      user,
      setuser,
      switchTheme,
      setSwitchTheme,
    }),
    [user, switchTheme]
  );
  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
}
