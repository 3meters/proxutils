/*******************
 *  When installed in a prox server this module has the effect
 *  of extending the built in node util module with proxibase
 *  utilites, and poluting the global namespace with prox globals
 *
 *  This enables tests and tools to use the same custom utils
 *  while leaving their source embeded in the server itself
 *
 *  Private for obvious reasons
 ****************/

module.exports = require('../../lib/utils')
require('../../lib/global')
