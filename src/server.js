require("./db/connection"); //instantly run database connection
const express = require("express"); //pull in all express modules
const userRouter = require("./user/routes"); // bring in all endpoints conncted to userRouter
const app = express(); // create webserver constant to manipulate
const port = process.env.PORT || 5001; // store supplied port or port 5001

app.use(express.json()); //use express json parser
app.use(userRouter);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// listening on port 5001 or provided port on current location (localhost)
