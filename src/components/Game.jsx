import React from 'react'
import Board from './Board'
import PropTypes from 'prop-types'

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
        <h4>Let's play!!! Apr 07</h4>
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

Game.propTypes = {
    history: PropTypes.arrayOf(PropTypes.object).isRequired,
    winner: PropTypes.string.isRequired, 
    xIsNext: PropTypes.bool.isRequired, 
    stepNumber: PropTypes.number.isRequired, 
    handleSquareClick: PropTypes.func.isRequired, 
    handleStepClick: PropTypes.func.isRequired
}

export default Game
