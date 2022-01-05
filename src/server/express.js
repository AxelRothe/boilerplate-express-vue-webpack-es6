const express = require("express");
const path = require("path");

module.exports = {
	/**
	 * Start the Express and listen to the specified port
	 *
	 * This will also enable any assets in the /assets/ folder to be called via http://localhost:port/assets/
	 *
	 * Note: This only launches an HTTP Server, if you require HTTPS you need to add a HTTPS configuration like NGINX in front of this app.
	 *
	 * @param {number} port the port number
	 */
	init(port) {
		const app = express()

		if (port) {

			app.use("/assets",express.static('assets'));
			app.use("/build",express.static('build'));

			//return base html web app file on going to localhost:port, e.g. 127.0.0.1:3000
			app.get('/', (req, res) => {
				res.sendFile(path.resolve('html','index.html'))
			})

			app.listen(port, () => {
				console.log(`listening at http://localhost:${port}`)
			})
		} else {
			console.log("No listening port specified.")
		}
	}
}