import React, { useState } from 'react'
import { calculateWinner } from '../helper'
import Board from './Board'


const styles = {
    width: '200px',
    margin: '20px auto',
};



const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])


    const handleClick = i => {
        const History = history.slice(0, stepNumber +1 );
        const current = History[stepNumber];
        const squares = [...current];

        if (winner || squares[i]) return;

          squares[i] = xIsNext ? 'X' : 'O';
          setHistory([...History, squares]);
          setStepNumber(History.length);
          setXIsNext(!xIsNext);
    }

    const jumpTo = step => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
    };

    const renderMoves = () => (
        history.map((step, move) => {
             const desc = move ? 'Go to move #' + move : 'Go to game start';
             return ( 
                 <li key={move}>
                     <button onClick={() => jumpTo(move)}>
                         {desc}
                     </button>
                 </li>
             )
         })
     )
 
     return (
         <>
             <Board squares={history[stepNumber]} onClick={handleClick} />
             <div className='game' style={styles}>
                 <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                 {renderMoves()}
             </div>
         </>
     )
}

export default Game;
