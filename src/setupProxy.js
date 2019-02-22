const proxy = require("http-proxy-middleware");

module.exports = (app) => {
	app.use("/movie", proxy({
		target: "https://ticket-api-m.mtime.cn",
		changeOrigin: true
	})),
	app.use("/index", proxy({
		target: "http://localhost:8080",
		changeOrigin: true
	})),
	app.use("/data", proxy({
		target: " https://www.easy-mock.com/mock/5c62af35fe257b0e6ddb1e1b/elk_moni",
		changeOrigin: true
	}))
}

//https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=125805

//http://localhost:8080/tail/taillist

//http://localhost:8080/tail/getElkLogType

//http://localhost:8080/index/selectByIndex