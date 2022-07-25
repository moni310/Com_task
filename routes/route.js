const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")

const Web = require("../controller/Book");
const User = require("../controller/register")

// register
router.post("/signup",User.Signup)
router.post("/login",User.Login)


// Book
router.post("/createbook",auth,Web.createBook)
router.get("/getall",auth,Web.getallBook)
router.get("/get/:id",auth,Web.getoneBook)
router.patch("/update/book/:id",auth,Web.UpdateBook)
router.delete("/delete/book/:id",auth,Web.deleteBook)



module.exports=router