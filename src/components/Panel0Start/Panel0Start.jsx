import React from 'react'
import {useSpring, config, animated} from 'react-spring'
import styles from "./Panel0Start.module.css"


export default function Panel0Start() {

  const animPanel0 = useSpring({
    from: {opacity: 0},
    to: {opacity : 1},
    config: config.default
  })

  return (
    <animated.div className={styles.panel0Start} style={animPanel0}>
        <h2 >On League</h2>        
        <p>Make and save your tourneys</p>
        <img src="trofeo.gif" alt="trofeo"/>
    </animated.div>
  )
}
