import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Game = ({myChoice,setScore,score,setShowFooter}) => {
  const [house,setHouse]=useState("");
  const [playerWin,setPlayerWin]=useState("");
  const [counter,setCounter]=useState(3);

  const newHousePick=()=>{
    const choices=["rock","paper","scissors"];
    setHouse(choices[Math.floor(Math.random()*3)])
  }

  const Result=()=>{
    if (myChoice === "rock" && house === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "rock" && house === "paper") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "scissors" && house === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "scissors" && house === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "paper" && house === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "paper" && house === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  }

  useEffect(()=>{
    newHousePick();
    setShowFooter(false)
  },[])
  
  useEffect(()=>{

    const timer=
      counter>0 ? setInterval(()=> {
        setCounter(counter-1);
      },1000)
      : Result();

      return () => {
        clearInterval(timer)
      }
  },[counter,house])

  return (
    
      <div className='game'>
        <div className='game__you'>
          <span className='text'>You Picked</span>
          <div className={`icon icon--${myChoice} ${
            playerWin=="win" ? `icon icon--${myChoice}--winner` : ""
          }`}></div>
        </div>
        <div className="game__play">
          <div className="text">
            { playerWin == "win"  && <span className="text">You Win</span>}
            { playerWin == "lose"  && <span className="text">You Lose</span>}
            { playerWin == "draw"  && <span className="text">Draw</span>}
          </div>
          <Link to="/" className="play-again" onClick={() => {setHouse(); setShowFooter(true)}}>
            Play Again
          </Link>
        </div>
        <div className="game__house">
          <span className="text">The house picked</span>
          {counter == 0 ? (
          <div
            className={`icon icon--${house} ${
              playerWin == "lose" ? `icon icon--${house}--winner` : ""
            }`}
          ></div>
        ) : (
          <div className="counter">{counter}</div>
        )}
        </div>
      </div>
    
  )
}

export default Game