const proxy = require("http-proxy-middleware");

module.exports = (app) => {
	app.use("/index", proxy({
		target: "http://localhost:8080",
		changeOrigin: true
	})),
	app.use("/data", proxy({
		target: " https://www.easy-mock.com/mock/5c62af35fe257b0e6ddb1e1b/elk_moni",
		changeOrigin: true
	}))
}




//http://localhost:8080/index/selectByIndex