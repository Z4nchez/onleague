import React from "react";
import { useSpring, config, animated } from "react-spring";
import styles from "./Tourney.module.css";
import { useContext } from "react";
import { TourneyContext } from "../../context/TourneyContext";
import Match from "../Match/Match";

export default function Tourney() {

  const animPanel0 = useSpring({
    from: { opacity: 0, width: "20%", height: "20%" },
    to: { opacity: 1, width: "100%", height: "100%" },
    config: config.default,
  });

  const { matrixM, dataTourney1, setTourneyState, setAllMatches } = useContext(TourneyContext);

  return (
    <animated.div className={styles.tourney} style={animPanel0}>
      
      <div className={styles.titleCont}>
        <div className={styles.title}>
          <h2>{dataTourney1.name}</h2>
        </div>
        <div className={styles.close}>
          <div className={styles.closeButton} onClick={() => {setTourneyState("A"); setAllMatches([])}}>Exit</div>
        </div>
      </div>
      <div className={styles.panelCont}>
        {/*<div className={styles.dataCont}>
          <div className={styles.dataPanel}>
            <div className={styles.dataTitle}>
              <h3>Results</h3>
            </div>
            <div className={styles.dataInfo}>
              <div className={styles.dataText}>{results.map(result => <div className={styles.result} key={results.indexOf(result)}>{result}</div> )}</div>
            </div>
            <div className={styles.dataWinner}>
              <h4 className={styles.dataWinnerText}>{dataTourney1.winner}</h4>
            </div>
          </div>
  </div>*/}
        <div className={styles.tourneyCont}>{matrixM.map((round) => 
          <div className={styles.round} key={matrixM.indexOf(round)}>{round.map((match) => <Match key={round.indexOf(match)} dato={match}></Match>)}</div>
        )}</div>
      </div>
      
      <div className={styles.linkCont}>
        <div className={styles.titleLink}>Link of your tourney: </div>
        <a className={styles.link} href={`${process.env.REACT_APP_SERVERURL}/bracket/${dataTourney1._id}`} target="_blank" rel="noopener noreferrer">{`${process.env.REACT_APP_SERVERURL}/bracket/${dataTourney1._id}`}</a>
      </div> 
    </animated.div>
  );
}
