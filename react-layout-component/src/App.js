import { Layout } from "./Component/Layout";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Layout>
        <div>
          Hello World
        </div>
      </Layout>
    </div>
  );
}

export default App;
