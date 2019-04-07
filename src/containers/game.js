import { addMove, jumpToStep } from '../actions';
import Game from '../components/Game'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    history: state.history,
    winner: state.winner,
    xIsNext: state.xIsNext,
    stepNumber: state.stepNumber
})

const mapDispatchToProps = dispatch => ({
    handleSquareClick: id => dispatch(addMove(id)),
    handleStepClick: step => dispatch(jumpToStep(step))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)

