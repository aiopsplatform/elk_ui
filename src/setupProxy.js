const proxy = require("http-proxy-middleware");

module.exports = (app) => {
	app.use("/movie", proxy({
		target: "https://ticket-api-m.mtime.cn",
		changeOrigin: true
	})),
	app.use("/tail", proxy({
		target: "http://localhost:8080",
		changeOrigin: true
	})),
	app.use("/tail", proxy({
		target: "http://192.168.43.78:8080",
		changeOrigin: true
	}))
}

//https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=125805

//http://localhost:8080/tail/taillist

//http://192.168.43.78:8080/tail/getElkLogType