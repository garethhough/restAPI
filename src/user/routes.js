const { Router } = require("express"); //import router method from express
const { signUp } = require("./controllers"); // import only signup from controllers file
const userRouter = Router(); // create a new router that can have endpoints added to it

userRouter.post("/user", signUp); //defining a post request on /user path, that calls signup controller

module.exports = userRouter;
