import React from 'react'
import { useContext } from "react";
import { TourneyContext } from '../../context/TourneyContext';
import Panel0Start from '../Panel0Start/Panel0Start'
import Panel0Make from '../Panel0Make/Panel0Make'
import Panel0Find from '../Panel0Find/Panel0Find'
import styles from "./Panel0.module.css"

export default function Panel0() {

  const { selectedPanel, setSelectedPanel } = useContext(TourneyContext);

  return (
    <div className={styles.panel0}>
        <div className={styles.area}>
          {selectedPanel === "1" && <Panel0Find></Panel0Find>}
          {selectedPanel === "2" && <Panel0Start></Panel0Start>}
          {selectedPanel === "3" && <Panel0Make></Panel0Make>}
        </div>
        <div className={styles.controlCont}>
            <button className={`${styles.controlLeft} ${styles.ctrl0}`} onClick={() => setSelectedPanel("1")}>Find your Tourney</button>
            <button className={`${styles.controlStart} ${styles.ctrl0}`} onClick={() => setSelectedPanel("2")}>Home</button>
            <button className={`${styles.controlRight} ${styles.ctrl0}`} onClick={() => setSelectedPanel("3")}>Make a Tourney</button>            
        </div>
    </div>
  )
}
