import React from 'react'
import Panel0 from '../Panel0/Panel0'
import Tourney from "../Tourney/Tourney"
import EndInscription from '../EndInscription/EndInscription'
import styles from "./Super.module.css"
import {useContext} from "react"
import { TourneyContext } from "../../context/TourneyContext";

export default function Super() {

  const { tourneyState } = useContext(TourneyContext);

  return (
    <div className={styles.super}>
      {tourneyState === "A" && <Panel0></Panel0>}
      {tourneyState === "B" && <Tourney></Tourney>}
      {tourneyState === "C" && <EndInscription></EndInscription>}
    </div>
  )
}
