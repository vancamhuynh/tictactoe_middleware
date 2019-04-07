import { updateMove, ADD_MOVE } from '../actions'

const calWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
       
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }      
    }
    return null;
}
const calculateWinner = store => next => action => {
    switch(action.type) {
        case ADD_MOVE: {
            const state = store.getState();
            const history = state.history.slice(0, state.history.length + 1);
            const current = history[state.stepNumber];
            const squares = current.squares.slice();
        
            if ( state.winner || squares[action.index]) {
                return
            }
        
            squares[action.index] = state.xIsNext? 'X' : 'O';
            const winner = calWinner(squares);
        
            return next(updateMove(
                history.concat([{
                    squares: squares
                }]),
                !state.xIsNext,
                history.length,
                winner         
            ));
        }
            
        default:
            next(action)
    }
}

export default calculateWinner
