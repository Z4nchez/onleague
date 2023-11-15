import React from 'react'
import styles from "./Match.module.css"
import { useState, useEffect, useContext } from "react"
import { TourneyContext } from "../../context/TourneyContext";

function Match({ dato }) {

    const { updateNextMatch1, updateNextMatch2, updateMatch, allMatches} = useContext(TourneyContext);

    let title = `Match ${dato.name}`;

    const [scoreA, setScoreA] = useState(dato.score1);
    const [scoreB, setScoreB] = useState(dato.score2);
    //const [newData, setNewData] = useState("");
    const [confirm, setConfirm] = useState(dato.finished);
    const [finished, setFinished] = useState(dato.finished);

    useEffect(() => {dato.score1 = scoreA}, [scoreA]);
    useEffect(() => {dato.score2 = scoreB}, [scoreB]);
    useEffect(() => {dato.finished = confirm}, [confirm]);
    /*useEffect(() => {
        if(confirm === null || confirm === "" || confirm === false){
            console.log("No entró a confirm: " + dato.name)
        }
        else{           
            if (scoreA === "" || scoreB === "" || scoreA === null || scoreB === null || (scoreA === 0 && scoreB === 0) || (scoreA === "0" && scoreB === "0")){
                console.log("Entro a confirm pero no habia puntos: " + dato.name)
            }
            else{
                dato.finished = confirm;
                setNewData(`${dato.player1} (${scoreA}) - ${dato.player2} (${scoreB})`)
                console.log("Si entró a confirm: " + dato.name)
            }
        }  
                   
    }, [confirm]);*/

    /*useEffect(() => {
            if (newData === "" || newData === null){
                console.log("Estado inicial, no existe newData: " + dato.name)
            }
            else{
                if (dataTourney1.data === null || dataTourney1.data === ""){
                    setDataTourney1({...dataTourney1, data: newData});
                    console.log("La data del torneo esta vacia: " + dato.name)
                }
                else{
                    setDataTourney1({...dataTourney1, data: dataTourney1.data + "," + newData});
                    console.log("Se añadio nueva data: " + dato.name)
                }
                setFlagResults(dataTourney1.data);    
            }               
    }, [newData]);*/

    function addUpdate (){

        updateMatch(dato.name, dato.tourney, scoreA, scoreB, confirm);

        if(scoreA > scoreB){
            if(dato.nextPosition === 2){
                updateNextMatch1(dato.next, dato.tourney, dato.player1, dato.player1Img);
            }
            else{
                updateNextMatch2(dato.next, dato.tourney, dato.player1, dato.player1Img);
            }
        }
        else{
            if(dato.nextPosition === 2){
                updateNextMatch1(dato.next, dato.tourney, dato.player2, dato.player2Img);
            }
            else{
                updateNextMatch2(dato.next, dato.tourney, dato.player2, dato.player2Img);
            }
        }
        
    }

    function saveUpdates (){

        fetch(`${process.env.REACT_APP_SERVERURL}/api/matches/allT/${dato.tourney}`, {
            method: "PUT",
            body: JSON.stringify(allMatches),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        
    }
    
  return (
    <div className={styles.matchCont}>
        <div className={styles.title}>{title}</div>
        <div className={styles.matchTable}>
            <div className={styles.playerCont}>
                <div className={styles.imgCont}>
                    <img src={dato.player1Img} alt="" />
                </div>                 
                <p>{dato.player1}</p>
                <div className={styles.scoreCont}>
                    {finished !== true && <input type="text" onChange={(e) => setScoreA(e.target.value)} defaultValue={dato.score1}/>}
                    {finished === true && <input type="text" onChange={(e) => setScoreA(e.target.value)} defaultValue={dato.score1} disabled={true}/>}
                </div>               
            </div>
            <div className={styles.playerCont}>
                <div className={styles.imgCont}>
                    <img src={dato.player2Img} alt="" />
                </div> 
                <p>{dato.player2}</p>
                <div className={styles.scoreCont}>
                    {finished !== true && <input type="text" onChange={(e) => setScoreB(e.target.value)} defaultValue={dato.score2}/>}
                    {finished === true && <input type="text" onChange={(e) => setScoreB(e.target.value)} defaultValue={dato.score2} disabled={true}/>}
                </div>   
            </div>
        </div>
        {(finished !== true && confirm !== true) && <div className={styles.buttonEnd} onClick={ () => {setConfirm(true); addUpdate()} }>Update!</div>}
        {(finished !== true && confirm === true) && <div className={styles.buttonEnd} onClick={ () => { setFinished(true); saveUpdates()} }>Sure?</div>}
        {finished === true && <div className={styles.buttonUpdated}>Updated</div>}
    </div>
  )
}

export default Match