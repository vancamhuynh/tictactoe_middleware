import { JUMP_TO_STEP, UPDATE_MOVE} from '../actions'

const initialState = {
    history: [{
        squares: Array(9).fill(null)
    }],
    xIsNext: true,
    stepNumber: 0,
    winner: null
}

const tictactoeApp = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_MOVE:        
            return Object.assign({}, state, {
                history: action.history,
                xIsNext: action.xIsNext,
                stepNumber: action.stepNumber,
                winner: action.winner         
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