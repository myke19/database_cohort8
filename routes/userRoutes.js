const express = require("express")


const userRoute = express.Router()
const {loginUser, createUser , deleteUser  , getSingleUser , updateUser, getAllUsers }
 = require("../controller/userController")

userRoute.post("/new-user", createUser)
userRoute.get("/all-users", getAllUsers)
userRoute.get("/get-one-user/:id", getSingleUser)
userRoute.delete("/delete-user/:userId", deleteUser)
userRoute.patch("/update-user/:userId", updateUser)
userRoute.get("/login", longinUser)


module.exports = userRoute