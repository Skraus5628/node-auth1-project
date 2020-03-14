const express = require('express');
const Users = require('./userModel.js');
const bcrypt = require('bcryptjs');
const { sessions, auth } = require('../middleware/auth')

const router = express.Router();


router.post("/register", async (req, res, next) => {
	try {
		const { username } = req.body
		const user = await Users.findBy({ username }).first()

		if (user) {
			return res.status(409).json({
				message: "Username is already taken",
			})
		}

		res.status(201).json(await Users.add(req.body))
	} catch(err) {
		next(err)
	}
})



router.post("/login", async (req, res, next) => {
	try {
		const { username, password } = req.body
		const user = await Users.findBy({ username }).first()
	
		const passwordValid = await bcrypt.compare(password, user.password)

		if (!user || !passwordValid) {
			return res.status(401).json({
				message: "You shall not pass!",
			})
		}

		req.session.user = user
		

		res.json({
			message: `Welcome ${user.username}!`,
		})
	} catch(err) {
		next(err)
	}
})

router.post('/logout', auth(), (req, res) => {
	req.session.destroy((err) =>{
		if (err){
			next(err)
		} else {
			res.json({
				message: "Successfully logged out!"
			})
		}
	})
});


router.get('/verifyToken', function(req, res) {
	// check header or url parameters or post parameters for token
	var token = req.body.token || req.query.token;
	if(!token) {
		return res.status(400).json({
			error: true,
			message: "token is required."
		});
	}
	// check token that was passed by decoding token using secret
	jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
		if(err) return res.status(401).json({
			error: true,
			message: "invalid token."
		});

		if (user.userId !== userData.userId) {
			return res.status(401).json({
				error: true,
				message: "invalid user."
			});
		}
		// get basic user details
		var userObj = utils.getCleanUser(userData);
		return res.json({
			user: userObj, token
		});
	
	});
});




module.exports = router; 