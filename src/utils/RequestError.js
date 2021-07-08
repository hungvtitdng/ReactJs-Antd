/**
 * Wrapper object Error with HTTP Request.
 */
class RequestError extends Error {
  constructor(errors) {
    super()
    this.name = 'RequestError'
    this.code = errors.code
    this.message = errors.message
  }
}

export default RequestError
