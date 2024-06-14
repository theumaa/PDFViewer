const User = require("../Models/UserModel");

//data display
const getAllUsers = async (req, res, next) => {
  let Users;

  //Get All Users
  try {
    users = await User.find();
  } catch {
    console.log(err);
  }

  //Users Not Found
  if (!users) {
    return res.status(404).json({ message: "User not founded" });
  }

  //Display All Users
  return res.status(200).json({ users });
};

//data entry
const addUsers = async (req, res, next) => {
  const { name, gmail, age, address } = req.body;

  let users;
  try {
    users = new User({ name, gmail, age, address });
    await users.save();
  } catch (err) {
    console.log(err);
  }

  //not users entry
  if (!users) {
    return res.status(404).json({ message: "unable to add users" });
  }
  return res.status(200).json({ users });
};

//Get byy ID
const getById = async (req, res, next) => {
  const id = req.params.id;

  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(err);
  }

  //not available entry
  if (!user) {
    return res.status(404).json({ message: "User not available" });
  }
  return res.status(200).json({ user });
};

//Update user
const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, gmail, age, address } = req.body;

  let users;

  try {
    users = await User.findByIdAndUpdate(id, {
      name: name,
      gmail: gmail,
      age: age,
      address: address,
    });
    users = await users.save();
  } catch (err) {
    console.log(err);
  }

  //not available entry
  if (!users) {
    return res.status(404).json({ message: "Unable to update user" });
  }
  return res.status(200).json({ users });
};

//Delete user
const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  let user;
  try {
    user = await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  //not delete entry
  if (!user) {
    return res.status(404).json({ message: "Unable to delete user" });
  }
  return res.status(200).json({ user });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
