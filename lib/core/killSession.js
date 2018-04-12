const getLocalEnv = require('./env')

const { baseOptions, fetchy_util, urlPathes } = getLocalEnv()

module.exports = function (request) {
  return async function (sessionId, options) {

    if (!options) options = { ...baseOptions }

    const { status, body } = await request.del(urlPathes.killSession(sessionId), undefined, options)

    return body
  }
}