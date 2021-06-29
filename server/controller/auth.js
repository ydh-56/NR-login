const jwt = require("jsonwebtoken");
const secrectKey = require('../config/secretkey').secrectKey;
const option = require('../config/secretkey').option;

// module.exports = {
//     async isAuth(req, res, next){
//         //const token = req.headers['authorization'] || req.query.token;
//         const token = req.headers['x-access-token'] || req.query.token || req.body.token;
//         const secrectKey = req.body.key || req.query.key;

//         if(token) {
//             // 비동기처리
//             jwt.verify(token, secrectKey, function(err, decoded) {
//                 if (err){
//                     res.json({
//                         result: 'fail',
//                         data:err
//                     });
//                 } else {
//                     res.json({
//                         result:'success',
//                         data: decoded.result
//                     });
//                 }
//             })
//         } else {
//             res.json({
//                 result:'fail',
//                 data: null,
//                 message:'인증되지 않음'
//             })
//         }
//     }


// }

module.exports = {
    isAuth: async function(token){
        let decoded;

        try {
            decoded = jwt.verify(token, secrectKey);
        } catch (error) {
            if(error.message === 'jwt expired'){
                console.log('expired token');
                return false;
            } else if (error.message === 'invalid token'){
                console.log('invalid token')
                return true;
            } else {
                console.log('invalid ')
                return true
            }
        }
        return decoded;
    } 
}