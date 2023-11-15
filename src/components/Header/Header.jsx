import React from 'react'
import styles from "./Header.module.css"

export default function Header() {

  /*function limpiarDB() {

    fetch(`${process.env.REACT_APP_SERVERURL}/api/tourneys1`, {
      method : "DELETE",
      body: JSON.stringify(),
      headers : {"Content-Type" : "application/json", 'Accept': 'application/json'}
    })

    fetch(`${process.env.REACT_APP_SERVERURL}/api/players`, {
      method : "DELETE",
      body: JSON.stringify(),
      headers : {"Content-Type" : "application/json", 'Accept': 'application/json'}
    })

    fetch(`${process.env.REACT_APP_SERVERURL}/api/matches`, {
      method : "DELETE",
      body: JSON.stringify(),
      headers : {"Content-Type" : "application/json", 'Accept': 'application/json'}
    })

  }*/

  return (
    <div className={styles.header}>
        <div className={styles.logoCont}>
            <img src="logoLeague.png" alt='logo'/>
        </div>
        {/*<div className={styles.limpiarDB}>
          <button onClick={limpiarDB}>Borrar DB</button>
        </div> */}
    </div>
  )
}
