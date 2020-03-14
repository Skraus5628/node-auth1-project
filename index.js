require('dotenv').config();

const express = require("express")
const session = require("express-session")
const KnexSessionStore = require("connect-session-knex")(session)
const cors = require("cors")
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const userRouter = require("./users/userRoute")
const userActions = require("./users/userActions")
const dbConfig = require("./data/config")


const server = express()
const port = process.env.PORT || 4000

server.use(cors())
// parse app/json
server.use(bodyParser.json());
// parse app/x-ww-form-urlenconded
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json())
server.use(session({
	// overwrites the default cookie name, hides our stack better
	name: "token",
	// avoid recreating sessions that have not changed 
	resave: false,
	// GDPR laws against setting cookies automatically
	saveUninitialized: false,
	// cryptographically sign the cookie
	secret: process.env.COOKIE_SECRET || "secret",
	// expire the cookie after 15 seconds
	cookie: {
		// maxAge: 15 * 1000,
		httpOnly: true,
	},
	store: new KnexSessionStore({
		// if session table doesn't exist, create it automatically
		createTable: true,
		// configured instance of knex
		knex: dbConfig,
	})

}))

server.use('/api', userActions)
server.use("/api/users", userRouter)

server.get("/",(req, res, next) => {
	res.json({
		message: "We're all mad here...",
	})
})


server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
