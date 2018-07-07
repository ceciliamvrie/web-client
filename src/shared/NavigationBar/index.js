import React from "react"
import styles from "./styles.css"

export const NavigationBar = ({ className }) => (
  <div className={ styles.container || className } >
    <div className={ styles["cell-1"] } >
      <a href="/" className={ styles.logo } >
        <h2>lineuplist</h2>
      </a>
    </div>
  </div>
);
