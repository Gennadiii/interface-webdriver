const getLocalEnv = require('./env')

const { baseOptions, fetchy_util, urlPathes } = getLocalEnv()

module.exports = function (request) {
  return async function (sessionId, elementId, options) {

    if (!options) options = { ...baseOptions }

    const { body, status } = await request.post(urlPathes.clear(sessionId, elementId), undefined, options)

    return body
  }
}