// middleware for stretch
// middleware checks if JWT token xists and verifies it if it does
// will authenticate request in future routes



// function validateToken (req, res, next){
//     // check header or url params or post params for token
//     const token = req.header['authorization'];
//     if(!token) return next();

//     token= token.replace('Bearer' , '');
//     jwt.verify(token, process.env.JWT_SECRET, function(err, user){
//         if(err){
//             return res.status(401).json({
//                 error: true,
//                 message: "invalid user."
//             });
//         } else {
//             req.user = user; 
//             next();
//         }
//     });
// }

// module.exports = validateToken;