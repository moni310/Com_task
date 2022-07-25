const express = require('express')
const app = express()
const bcrypt = require("bcrypt")
const User = require("../modles/register") 
const jwt = require("jsonwebtoken");
const JWT_TOKEN_KEY="this is key"

app.use(express.json())



const Signup= async (req, res) => {
    
    try {
         const {  userName,email,password,} = req.body;

      if (!(userName && email && password)) {
        res.status(400).send("All input is required");
      }
  

      const oldUser = await User.findOne({userName }); 
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        userName,
        email,
        password: encryptedPassword,
      });
  
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  };


  //login

  const Login= async (req, res) => {

    
    try {
      const { userName, password } = req.body;
  
      if (!(userName && password)) {
        res.status(400).send("All input is required");
      }
    
      const user = await User.findOne({userName });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, userName },
          JWT_TOKEN_KEY,
          {
            expiresIn: "6d",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
    
  };

  module.exports={Signup,Login}
  