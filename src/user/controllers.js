const User = require("./model");

exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    //req.body is an obj that contains k/v pairs that match my User model
    res.send({ user: newUser });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
