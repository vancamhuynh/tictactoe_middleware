import { ADD_MOVE, JUMP_TO_STEP} from '../actions'

const initialState = {
    history: [{
        squares: Array(9).fill(null)
    }],
    xIsNext: true,
    stepNumber: 0,
    winner: null
}

// const calculateWinner = (squares) => {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];

//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
       
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }      
//     }
//     return null;
// }

const tictactoeApp = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MOVE: 
            const history = state.history.slice(0, state.history.length + 1);
            const current = state.history[state.stepNumber];
            const squares = current.squares.slice();

            if ( state.winner || squares[action.index]) {
                return state;
            }

            squares[action.index] = state.xIsNext? 'X' : 'O';
            const winner = calculateWinner(squares);

            return Object.assign({}, state, {
                history: state.history.concat([{
                    squares: squares
                }]),
                xIsNext: !state.xIsNext,
                stepNumber: history.length,
                winner: winner         
            })

        case JUMP_TO_STEP:
            return Object.assign({}, state, {
                stepNumber: action.step,
                history: state.history.slice(0, action.step + 1),
                xIsNext: (action.step % 2) === 0,
                winner: null
            })

        default:
            return state;
    }
}

export default tictactoeApp