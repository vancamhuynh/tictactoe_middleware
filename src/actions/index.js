export const ADD_MOVE = 'ADD_MOVE'
export const JUMP_TO_STEP = 'JUMP_TO_STEP'
export const UPDATE_MOVE = 'UPDATE_MOVE'

export function addMove(index) {
    return {
        type: ADD_MOVE,
        index
    }
}

export function jumpToStep(step) {
    return {
        type: JUMP_TO_STEP,
        step
    }
}

export function updateMove(history, xIsNext, stepNumber, winner) {
    return {
        type: UPDATE_MOVE,
        history,
        xIsNext,
        stepNumber,
        winner
    }
}