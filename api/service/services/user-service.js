import User from "../models/user.js";

const getUsers = async (query = {}) => {
  return User.find(query);
};

const getUser = async (query = {}) => {
  return User.findOne(query);
};

const getUserById = async (id) => {
  return User.findById(id);
};

const createUser = async (userData) => {
  return User.create(userData);
};

const updateUser = async (id, userData) => {
  return User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
};

const deleteUser = async (id) => {
  return User.findByIdAndDelete(id);
};

export default {
  getUsers,
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
