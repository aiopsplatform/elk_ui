const proxy = require("http-proxy-middleware");

module.exports = (app) => {
	app.use("/movie", proxy({
		target: "https://ticket-api-m.mtime.cn",
		changeOrigin: true
	}))
}

//https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=125805