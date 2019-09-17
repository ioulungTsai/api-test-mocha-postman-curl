const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = express.Router();

// Create login route api
router.post('/login',function(req,res){
  const { email, password } = req.body
  // Regular expression pattern for string at least 8 characters long, 1 upper case, 1 number
  const regExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
  if(password.match(regExp)){
    res.json({
      "error" : false,
      "message" : "success",
      "email" : email,
      "password" : password
    });
  } else {
    res.json({
      "message" : "Password not strong enough!"
    })
  }
});

app.use('/',router);

app.listen(8080,function(){
  console.log("I am listening at PORT 8080");
})