const User = require("./model");

// Controller: This section controls the requests of the user and generates the appropriate response which is fed to the user.

// signup: This section creates a new user and stores it in the database.
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

// login: This section checks if the user exists in the database and if the password is correct.
exports.login = async (req, res) => {
  try {
    if (!req.user) {
      throw new Error("Incorrect credentials");
    } else {
      res.send({ user: req.user });
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

// find: This section finds a user in the database by their username.
exports.find = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      throw new Error("User not found");
    } else {
      res.send({ user });
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

// findAll: This section finds all users in the database.
exports.findAll = async (req, res) => {
  try {
    const users = await User.find(req.params);
    if (!users) {
      throw new Error("No users found");
    } else {
      res.send({ users });
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

// update: take username and edit the email address and password
exports.update = async (req, res) => {
  try {
    const userUpdates = await User.updateOne(
      req.body.userObj,
      req.body.updateObj
    );

    if (userUpdates.modifiedCount > 0) {
      res.status(200).send({ msg: "Successfully Updated" });
    } else {
      throw new Error({ msg: "Something went wrong" });
    }
   } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

// delete: take username and delete the user
exports.delUser = async (req, res) => {
  try {
    const deleteUser = await User.deleteOne({ username: req.params.username });
    if (!deleteUser) {
      throw new Error("User not found");
    } else {
      res.send({ deleteUser });
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
