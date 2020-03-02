var express = require("express");

const router = express.Router();
var jwt = require("jsonwebtoken");
var SignUp = require("../Model/signup");
var  config  = require("../db/jwtkey");




router.post("/login", function(req, res) {
  SignUp.findOne({
    userEmail: req.body.userEmail,
    userPassword: req.body.userPassword
  }).then(user => {
    if (user) {
      jwt.sign(
        { user },
        config .secretKey,
        {
          expiresIn: 86400
        },
        (err, token) =>{
          res.json({ success: true, data: "Bearer " + token });
        }
      );
    } else {
      return res.json({ success: false ,data:"User  is not Found"});
    }
  });
 
});

module.exports = router;
