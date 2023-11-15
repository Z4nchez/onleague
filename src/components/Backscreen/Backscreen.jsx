import React from "react";
import styles from "./Backscreen.module.css"

export default function Backscreen() {
  return (
    <>
      <video className={styles.fondo} src="blue3.mp4" autoPlay muted loop></video>
      <div className={styles.blur}></div>
      <div className={styles.lumin}></div>
    </>
  );
}
