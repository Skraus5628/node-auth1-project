const express = require("express")
const Users = require("./userModel")
const auth = require('../middleware/auth')

const router = express.Router()

router.get("/", auth(), async (req, res, next) => {
	try {
		res.json(await Users.find())
	} catch(err) {
		next(err)
	}
})


module.exports = router

