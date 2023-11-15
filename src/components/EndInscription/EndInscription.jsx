import React from "react";
import { useContext } from "react";
import { TourneyContext } from "../../context/TourneyContext";
import styles from "../EndInscription/EndInscription.module.css";
import { useSpring, config, animated } from "react-spring";

export default function EndInscription() {

  const { setTourneyState, setSelectedPanel } = useContext(TourneyContext);

  const animPanel = useSpring({
    from: { opacity: 0, width: "20%", height: "20%" },
    to: { opacity: 1, width: "100%", height: "100%" },
    config: config.default,
  })

  return (
    <animated.div className={styles.panel} style={animPanel}>
      <div className={styles.titleCont}>
        <h2>Task completed</h2>
        <img src="check.png" alt="" />
        <p>Your Tournament was maked.</p>
        <p>Go to "Start your tourney" for check your new tourney, or "Back to Home" for exit.</p>
      </div>
      <div className={styles.buttonCont}>
        <button className={styles.button} onClick={() => {setTourneyState("A"); setSelectedPanel("1"); window.location.href = window.location.href;}}>Start your Tourney</button>
      </div>
      <div className={styles.buttonCont}>
        <button className={styles.button} onClick={() => {setTourneyState("A"); setSelectedPanel("2"); window.location.href = window.location.href;}}>Back to Home</button>
      </div>
    </animated.div>
  );
}
