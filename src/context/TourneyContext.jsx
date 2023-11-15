import { createContext, useState, useEffect } from "react";

export const TourneyContext = createContext();

export function TourneyContextProvider(props) {

  const [matrixM, setMatrixM] = useState([]);

  const [dataTourney1, setDataTourney1] = useState({
    name: "",
    pass: "",
    data: "",
    winner: ""
  });

  const [listPlayers, setListPlayers] = useState([]);
  const [listPlayers2, setListPlayers2] = useState([]);
  const [allMatches, setAllMatches] = useState([]);
  //const [results, setResults] = useState([])
  //const [flagResults, setFlagResults] = useState({})

  /*useEffect(() => {
    if(flagResults === null || flagResults === "" || flagResults === false){     
    }
    else{
      if (dataTourney1.data === " () -  ()" || dataTourney1.data === ""){
      }
      else{
        setResults(dataTourney1.data.split(","))
        console.log(dataTourney1.data)
        
        fetch(`${process.env.REACT_APP_SERVERURL}/api/tourneys1/${dataTourney1.pass}`, {
          method: "PUT",
          body: JSON.stringify(dataTourney1),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
      }  
    }    
  }, [flagResults]);*/

  const [tourneyState, setTourneyState] = useState("A");
  const [selectedPanel, setSelectedPanel] = useState("2");

  const addPlayer = (newPlayer, icon) => {
    let nuevoID = 0;
    if (listPlayers[0] == null) {
      nuevoID = 0;
    } else {
      nuevoID = listPlayers[listPlayers.length - 1].id + 1;
    }
    setListPlayers([
      ...listPlayers,
      {
        id: nuevoID,
        name: newPlayer,
        img: icon,
        score: 0,
        df: 0,
        mmr: 0,
        tourney: dataTourney1.pass,
      },
    ]);
  };

  const newTourney1 = (name1, pass1) => {
    setDataTourney1({
      name: name1,
      pass: pass1,
      data: "",
      winner: ""
    });   
  };

  const deletePlayer = (target) => {
    setListPlayers(listPlayers.filter((player) => player.id !== target));
  };

  const addBlanks = (listP) => {
    if (listP.length > 0) {
      let numberOk = 2;
      let numberVoid = 0;
      let numPlayers = listP.length;
      let newList = [];
      let indexNew = 0;
      let indexOld = 0;

      while (numberOk < numPlayers) {
        numberOk = numberOk * 2;
      }

      numberVoid = numberOk - numPlayers;

      if (numberVoid > 0) {
        while (numberOk > indexNew) {
          if (indexNew % 2 === 0 || numberVoid === 0) {
            newList[indexNew] = listP[indexOld];
            indexNew = indexNew + 1;
            indexOld = indexOld + 1;
          } else {
            newList[indexNew] = {
              name: "Non Player",
              img: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416367/OnLeague/default0_agszjn.png",
              score: 0,
              df: 0,
              mmr: 0,
              tourney: dataTourney1.pass,
            };
            indexNew = indexNew + 1;
            numberVoid = numberVoid - 1;
          }
        }
        setListPlayers2(newList);
      } else {
        setListPlayers2(listP);
      }
    }
  }; // A partir de una lista de participantes de numero dispar la transforma en una lista par llenando de vacios.

  const makeMatches = (listP) => {
    if (listP.length > 0) {
      let numberNextMatches = 0;
      let round = 1;
      let partner = 2;
      let nextMatch = 1;
      let indexPlayer = 0;
      let numberMatches = 0;
      let nMatch = 0;
      let newList = [];

      numberMatches = listP.length / 2;
      numberNextMatches = numberMatches / 2;

      while (numberMatches > 0) {
        // Crea la primera ronda
        while (numberNextMatches > 0) {
          while (partner > 0 && numberMatches > 0) {
            newList.push({
              name: (round * 100) + numberMatches,
              player1: listP[indexPlayer].name,
              player1Img: listP[indexPlayer].img,
              player2: listP[indexPlayer + 1].name,
              player2Img: listP[indexPlayer + 1].img,
              score1: 0,
              score2: 0,
              round: round,
              next: ((round + 1) * 100) + numberNextMatches,
              nextPosition: partner,
              finished: false,
              tourney: dataTourney1.pass,             
            });
            partner = partner - 1;
            numberMatches = numberMatches - 1;
            indexPlayer = indexPlayer + 2;
          }
          nextMatch = nextMatch + 1;
          numberNextMatches = numberNextMatches - 1;
          partner = 2;
        }
      }

      numberMatches = listP.length / 4;
      nMatch = numberMatches;
      partner = 2;
      nextMatch = nMatch / 2;
      round = 2;

      while (numberMatches >= 1) {
        // Crea las demas rondas del torneo
        while (nMatch > 0) {
          while (partner > 0 && nMatch > 0) {
            newList.push({
              name: (round * 100) + nMatch,
              player1: "",
              player1Img: "",
              player2: "",
              player2Img: "",
              score1: 0,
              score2: 0,
              round: round,
              next: ((round + 1) * 100) + nextMatch,
              nextPosition: partner,
              finished: false,
              tourney: dataTourney1.pass,
            });
            partner = partner - 1;
            nMatch = nMatch - 1;
          }
          nextMatch = nextMatch - 1;
          partner = 2;
        }
        numberMatches = numberMatches / 2;
        nMatch = numberMatches;
        nextMatch = nMatch / 2;
        round = round + 1;
      }
      setAllMatches(newList);
    }
  }; // A partir de una lista de participantes crea todos los matches del torneo con sus respectivas rondas.

  const checkMaxRounds = (listM) => {

    let maxRound = 0;    
    listM.map(element => element.round > maxRound ? maxRound = element.round : maxRound);

    return maxRound;
    
  }

  const matrixMatches = (listM) => {

    if (listM.length > 0) {
      let numRounds = checkMaxRounds(listM);
      let actualRound = 1;
      let newMatrix = [];
      let actualList = [];

      while (numRounds >= actualRound) {
        actualList = listM.filter((match) => match.round === actualRound);
        newMatrix.push(actualList);
        actualRound = actualRound + 1;        
      }

      setMatrixM(newMatrix);
    }
  }; // A partir de una lista de matches crea un arreglo de rondas, donde cada ronda es un arreglo de matches para su correcto mapeo (matriz)

  const updateMatch = (name, tourney, p1, p2, f) => {
    const matchesUpdate = allMatches.map(element => (element.name === name && element.tourney === tourney) ? {...element, finished: f, score1: p1, score2: p2,} : element);
    setAllMatches(matchesUpdate)
  }

  const updateNextMatch1 = (name, tourney, p, pi) => {
    const matchesUpdate = allMatches.map(element => (element.name === name && element.tourney === tourney) ? {...element, player1: p, player1Img: pi} : element);
    setAllMatches(matchesUpdate);
  }

  const updateNextMatch2 = (name, tourney, p, pi) => {
    const matchesUpdate = allMatches.map(element => (element.name === name && element.tourney === tourney) ? {...element, player2: p, player2Img: pi} : element);
    setAllMatches(matchesUpdate);
  }

  useEffect(() => {
    makeMatches(listPlayers2);
  }, [listPlayers2]);
  useEffect(() => {
    matrixMatches(allMatches);
  }, [allMatches]);

  const makeTourney1 = () => {

    fetch(`${process.env.REACT_APP_SERVERURL}/api/tourneys1`, {
      method: "POST",
      body: JSON.stringify(dataTourney1),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    fetch(`${process.env.REACT_APP_SERVERURL}/api/players/listP`, {
      method: "POST",
      body: JSON.stringify(listPlayers),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    fetch(`${process.env.REACT_APP_SERVERURL}/api/matches/listM`, {
      method: "POST",
      body: JSON.stringify(allMatches),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

  };

  return (
    <TourneyContext.Provider
      value={{
        addPlayer,
        deletePlayer,
        newTourney1,
        makeTourney1,
        setListPlayers,
        setDataTourney1,
        addBlanks,
        makeMatches,
        matrixMatches,
        setTourneyState,
        setSelectedPanel,
        setMatrixM,
        setAllMatches,
        updateNextMatch1,
        updateNextMatch2,
        updateMatch,
        //setFlagResults,
        //setResults,
        //flagResults,
        //results,
        tourneyState,
        selectedPanel,
        dataTourney1,
        listPlayers,
        listPlayers2,
        allMatches,
        matrixM,
      }}
    >
      {props.children}
    </TourneyContext.Provider>
  );
}
