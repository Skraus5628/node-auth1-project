const express = require("express")
const cors = require("cors")
const userRouter = require("./users/userRoute")
const userActions = require("./users/userActions")

const server = express()
const port = process.env.PORT || 4000

server.use(cors())
server.use(express.json())


server.use('/api', userActions)
server.use("/api/users", userRouter)

server.get("/", (req, res, next) => {
	res.json({
		message: "We're all mad here...",
	})
})


server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
