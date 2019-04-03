import React from 'react'
import Board from './board'

const Game = ({ history, winner, xIsNext, stepNumber, handleSquareClick, handleStepClick }) => {
    const getMoves = history.map((step, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => handleStepClick(move)}>{desc}</button>
            </li>
        );
    });
    
    return (
        <div className="game">
        <h4>Let's play!!! Mar 31</h4>
        <div className="game-board">
            <Board 
                squares={history[stepNumber].squares}
                onClick={(i) => handleSquareClick(i)}
             />
        </div>
        <div className="game-info">
            <div>{winner? `winner is ${winner}` : `Next play is: ${xIsNext? 'X' : 'O'}`}</div>
            <ol>{getMoves}</ol>
        </div>
    </div>
    )
}

export default Game
