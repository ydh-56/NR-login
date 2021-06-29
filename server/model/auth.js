const jwt = require("jsonwebtoken");
//const secretKey = require('../config/secretkey').secretKey;

module.exports = {
    tokenVerify: (req, res, next) => {
        // 헤더에서 가져온 토큰
        //let token = req.get("Authorization");
        // console.log(token);
        // const secretKey = require('../config/secretKey').secretKey;
        //const secretKey = (req.body.key) ? req.body.key : req.query.key
        const token = req.headers['x-access-token'] || req.query.token || req.body.token;
        const secrectKey = req.body.key || req.query.key;


        if(token) {
        // 비동기처리
        jwt.verify(token, secrectKey, function(err, decoded) {
            if (err){
                res.json({
                    result: 'fail',
                    data:err
                });
            } else {
                res.json({
                    result:'success',
                    data: decoded.result
                });
            }
        })
        } else {
            res.json({
                result:'fail',
                data: null,
                message:'인증되지 않음'
            })
        }
    }
}
