import React from 'react'
import { useState } from "react";
import {useSpring, config, animated} from 'react-spring'
import FormatMaker from '../FormatMaker/FormatMaker'
import Inscriptions from '../Inscriptions/Inscriptions'
import styles from "./Panel0Make.module.css"

export default function Panel0Make() {

    const [selectedMake, setSelectedMake] = useState("A");

    const animPanel0 = useSpring({
        from: {opacity: 0, width: "20%"},
        to: {opacity : 1, width: "100%"},
        config: config.default
    })

  return (
    <animated.div className={styles.panel0Make} style={animPanel0}>
        {selectedMake === "A" && <FormatMaker makeSelected={setSelectedMake}></FormatMaker>}
        {selectedMake === "B" && <Inscriptions makeSelected={setSelectedMake}></Inscriptions>}   
    </animated.div>
  )
}
