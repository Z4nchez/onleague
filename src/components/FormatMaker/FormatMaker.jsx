import React from 'react'
import {useSpring, config, animated} from 'react-spring'
import { useContext, useState } from "react";
import styles from "./FormatMaker.module.css"
import { TourneyContext } from "../../context/TourneyContext";

export default function FormatTourney({makeSelected}) {

    const { newTourney1 } = useContext(TourneyContext);
    const [nameTourney, setNameTourney] = useState("");
    const [passTourney, setPassTourney] = useState("");

    const animPanel0 = useSpring({
        from: {opacity: 0, width: "20%"},
        to: {opacity : 1, width: "100%"},
        config: config.default
    })

  return (
    <animated.form action="" style={animPanel0} className={styles.formatTourney}>
            <div className={styles.inputGroup}>
                <label htmlFor="inputName" className={styles.label0}>Name of Tourney</label>
                <input type="text" name='inputName' className={styles.input0} onChange={(e) => setNameTourney(e.target.value)}/>                
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="inputCode" className={styles.label0}>Code of Tourney</label>
                <input type="password" name='inputCode' className={styles.input0} onChange={(e) => setPassTourney(e.target.value)}/>                
            </div>
            <div className={styles.inputGroup}>
                {/* <label htmlFor="inputNPlayers" className={styles.label0}>Number of Players</label>
                <input type="number" name='inputNPlayers' className={styles.input0}/>                 */}
            </div>
            <div className={styles.inputGroup}>
                <button type='submit' className={styles.buttonSubmit} onClick={() => {
                    newTourney1(nameTourney, passTourney);
                    makeSelected("B");                    
                }}>Done!</button>            
            </div>
        </animated.form>
  )
}
