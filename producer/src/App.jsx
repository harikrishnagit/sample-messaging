import React from "react";
import Template from "./components/template/Template";

// import styles from "./App.module.scss";
// import globalStyles from "./assets/global-styles/bootstrap.module.css";
// import cx from "classnames";

export default function App() {
  return (
    <React.Fragment>
      <Template />
      {/* <button
        className={cx(
          globalStyles.btn,
          globalStyles["btn-primary"],
          styles.greencolor
        )}
      >
        Bootstrap primary Button
      </button>
      <p className={styles["red-only"]}>Hey hey</p> */}
    </React.Fragment>
  );
}
