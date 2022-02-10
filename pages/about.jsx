import styles from "../styles/About.module.css";
import Layout from "../layouts/mainLayout";

export default function about() {
  return (
    <Layout>
      <div className="text-center p-4">
        <h1 className="text-2xl text-blue-400">Welcome To About Page</h1>
        <h2 className={styles["title-h1"]}>Is about everything</h2>
      </div>
    </Layout>
  );
}
