import React from 'react'
import {useSpring, config, animated } from 'react-spring'
import { useState, useContext } from 'react'
import { TourneyContext } from "../../context/TourneyContext";
import styles from "./Panel0Find.module.css"

export default function Panel0Find() {

  const { setDataTourney1, setAllMatches, setTourneyState } = useContext(TourneyContext);
  const [passData, setPassData] = useState("");
  const [passOk, setPassOk] = useState("None");
  let torneo1 = "";

  const animPanel0 = useSpring({
    from: {opacity: 0, width: "20%"},
    to: {opacity : 1, width: "100%"},
    config: config.default
  })

  function checkPass(password) {
    fetch(`${process.env.REACT_APP_SERVERURL}/api/tourneys1/${password}`)
    .then(res => res.json())
    .then(data => torneo1 = data)
    .then(() => {
      if(torneo1.length > 0){
        setDataTourney1(torneo1[0]);
        //setResults(torneo1[0].data.split(","))
        setPassOk("True");
        fetch(`${process.env.REACT_APP_SERVERURL}/api/matches/inTourney/${torneo1[0].pass}`)
        .then(res => res.json())
        .then(dataM => setAllMatches(dataM))
      }
      else{
        setPassOk("False")
      }
    })
  }

  function initTourney () {
      
      setTourneyState("B"); setPassOk("None"); setPassData("")  
  }

  return (    
      <animated.div className={styles.panel0Find} style={animPanel0}>
        <form action="" onSubmit={(e) => {e.preventDefault(); initTourney();}}>
            <div className={`${styles.inputGroup} ${styles.findGroup}`}>
                <label htmlFor="inputFind" className={`${styles.labelFind} ${styles.label0}`}>Enter your code</label>
                <input type="text" name='inputFind' className={`${styles.inputFind} ${styles.input0}`} onChange={(e) => setPassData(e.target.value)}/>                
            </div>
            <div className={styles.inputGroup}>
                {passOk === "None" && <div></div>}
                {passOk === "True" && <div className={styles.validMessage}>Correct Password</div>}
                {passOk === "False" && <div className={styles.invalidMessage}>Invalid Password, try again</div>}            
            </div>
            <div className={styles.inputGroup}>
                {passOk === "True" && <button type='submit' className={styles.buttonSubmit}>Init Tourney</button> }
                {passOk !== "True" && <div className={`${styles.buttonSubmit} ${styles.buttonCheck}`} onClick={ () => checkPass(passData)}>Find Torney!</div> }            
            </div>
        </form>
      </animated.div>   
  )
}
