const express = require("express");
const {loginController,registerController,fetchAllUsersController} = require("../controller/Usercontrol")
const {protect} = require("../middleware/middle")
const Router = express.Router();

Router.post("/login",loginController);
Router.post("/register",registerController);
Router.get("/fetchUsers",protect,fetchAllUsersController);

module.exports = Router;