import React from 'react'
import styles from "./PlayerItem.module.css"
import {useSpring, config, animated} from 'react-spring'
import { useContext } from "react";
import { TourneyContext } from "../../context/TourneyContext";

export default function PlayerItem({ clave, namePlayer, icon}) {

    const { deletePlayer } = useContext(TourneyContext);

    const animPanel0 = useSpring({
        from: {opacity: 0, width: "20%"},
        to: {opacity : 1, width: "100%"},
        config: config.default
      })

  return (
    <animated.div className={styles.playerItemCont} style={animPanel0}>
        <div className={styles.playerIconCont}>
            <img src={icon} alt="" />
        </div>
        <div className={styles.playerNameCont}>
            <div className={styles.playerName}>{namePlayer}</div>
        </div>
        <div className={styles.removePlayerCont}>
            <button className={styles.removePlayer} onClick={() => deletePlayer(clave)}>Delete</button>
        </div>       
    </animated.div>
  )
}
