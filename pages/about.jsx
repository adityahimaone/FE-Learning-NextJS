import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";
import Layout from "../layouts/mainLayout";
import AppContext from "../context/appContext";

export default function about() {
  const [user, setuser] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setuser(data));
  }, []);

  const appContextValue = useMemo(
    () => ({
      user,
    }),
    [user]
  );

  return (
    <AppContext.Provider value={appContextValue}>
      <Layout pageTitle="About">
        <div className="text-center p-4">
          <h1 className="text-2xl text-blue-400">Welcome To About Page</h1>
          <h2 className={styles["title-h1"]}>Is about everything</h2>
          <Image src="/img/itzy.jpg" width={400} height={220} alt="about" />
        </div>
      </Layout>
    </AppContext.Provider>
  );
}
