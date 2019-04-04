const proxy = require("http-proxy-middleware");
import {IPAddress} from "./components/IPaddress"

module.exports = (app) => {
	app.use("/index", proxy({
		target: IPAddress,
		changeOrigin: true
	})),
	app.use("/table", proxy({
		target: "https://www.easy-mock.com/mock/5c62af35fe257b0e6ddb1e1b/elk_moni",
		changeOrigin: true
	}))
}




//http://localhost:8080/index/selectByIndex