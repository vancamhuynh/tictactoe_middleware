export const ADD_MOVE = 'ADD_MOVE'
export const JUMP_TO_STEP = 'JUMP_TO_STEP'

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