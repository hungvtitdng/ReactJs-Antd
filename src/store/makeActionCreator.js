/**
 * Creator actions redux.
 *
 * @param type
 * @param argNames
 * @returns {function(...[*]): {type: *}}
 */
const makeActionCreator = (type, ...argNames) => {
  return function (...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export default makeActionCreator
