import React from 'react'
import {useSpring, config, animated} from 'react-spring'
import { useContext, useState } from "react";
import { TourneyContext } from "../../context/TourneyContext";
import styles from "./Inscriptions.module.css"
import PlayerItem from "../PlayerItem/PlayerItem"
import IconsPanel from '../IconsPanel/IconsPanel';

export default function Inscriptions({makeSelected}) {

    const { addPlayer, listPlayers, makeTourney1, setListPlayers, setTourneyState, addBlanks } = useContext(TourneyContext);
    const [newPlayer, setNewPlayer] = useState("");
    const [contIcons, setContIcons] = useState("A");
    const [panelConfirm, setPanelConfirm] = useState("False")
    const [iconSelected, setIconSelected] = useState("https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416367/OnLeague/default0_agszjn.png")

    const animPanel0 = useSpring({
        from: {opacity: 0, width: "20%"},
        to: {opacity : 1, width: "100%"},
        config: config.default
      })

  return (
    <animated.div className={styles.inscriptionsCont} style={animPanel0}>
        <div className={styles.inputGroup}>
            <div className={styles.inputPlayerCont}>
                <label htmlFor="onePlayer" className={styles.label0}>New Player</label>
                <input type="text" name='onePlayer' className={styles.input0} onChange={(e) => setNewPlayer(e.target.value)} value={newPlayer}/>
                <img src={iconSelected} alt="" className={styles.playerImg} onClick={() => setContIcons("B")}/>
                {contIcons === "B" && <IconsPanel iconPanel={setContIcons} iconS={setIconSelected}></IconsPanel>}
            </div>            
            <button className={`${styles.ctrl1} ${styles.button}`} onClick={() => {addPlayer(newPlayer, iconSelected); setNewPlayer("")}}>Add</button>
        </div>
        <div className={styles.playersAggregatesCont}>
            <div className={styles.previousList}>{listPlayers.map((player) => <PlayerItem key={player.id} namePlayer={player.name} clave={player.id} icon={player.img}/>)}</div>
        </div>
        <div className={styles.inputGroup}>
            {panelConfirm === "False" && <div className={styles.controlPanel}>
                <button className={`${styles.controlLeft} ${styles.ctrl0}`} onClick={() => {makeSelected("A"); setListPlayers([]);}}>Back</button>
                <button className={`${styles.controlRight} ${styles.ctrl0}`} onClick={() => {addBlanks(listPlayers); setPanelConfirm("True")}}>End Inscriptions</button>
            </div>}
            {panelConfirm === "True" && <div className={styles.controlPanel}>
                <button className={`${styles.controlInit} ${styles.button}`} onClick={() => {makeTourney1(); setTourneyState("C");}}>Make your Tourney!</button>
            </div>}
            
        </div>
    </animated.div>
  )
}
