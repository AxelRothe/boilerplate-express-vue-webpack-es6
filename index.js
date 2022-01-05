/**
 * Launches the express server
 * launch through npm run dev
 */
const server = require( './src/server/express.js')
const config = require('./serverConfig.json')

//start server
server.init(config.port)