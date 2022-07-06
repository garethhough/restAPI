const { Router } = require("express"); //import Router method only from express
const { signUp, login, find, update, delUser, } = require("./controllers"); //import only signUp from controllers file
const { hashPass } = require("../middleware");
const userRouter = Router(); //create a router that can have endpoints added to it

userRouter.post("/user", hashPass, signUp); //defining a post request on /user path, that calls the signUp controller
userRouter.post("/login", login); //defining a post request on /login path, that calls the login controller
userRouter.get("/user/:username", find); //defining a get request on /user:username path, that calls the find controller
userRouter.patch("/user", update); //defining a put request on /user path, that calls the update controller
userRouter.delete("/user/:username", delUser) //defining a delete request on /user/:username path, that calls the delUser controller
module.exports = userRouter;