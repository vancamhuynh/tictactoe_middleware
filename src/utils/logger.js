const logger = store => next => action => {
    console.log('dispatching:', action) // eslint-disable-line no-console
    let result = next(action)
    console.log('next state:', store.getState()) // eslint-disable-line no-console
    return result
}

export default logger
