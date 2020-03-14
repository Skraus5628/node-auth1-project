// generate token using secret from process.env.JWT_SECRET
var jwt = require('jsonwebtoken')

// generate token and return
function generateToken(user) {

    // General rules
    // 1. don't user pw and other sensitive fields
    // 2. don't use information that's useful in other parts. keep it secure
    if(!user) return null;

    var u = {
        userId: user.userId,
        name: user.name,
        username: user.username,
        isAdmin: user.isAdmin
    };

    return token = jwt.sign(u, process.env.JWT_SECRET, {
        expiresIn: 60*60*24
        // expires in 24 hrs
    });
}

//  return basic user detail
function getCleanUser(user){
    if (!user) return null;

    return {
        userId: user.userId,
        name: user.name,
        username: user.username,
        isAdmin: user.isAdmin
    };
}

module.exports = {
    generateToken,
    getCleanUser,
}