const User = require("../../models/userModel");
module.exports = {
  index,
  create,
};
async function index(req, res) {
  let userList = await User.find({});
  res.json(userList);
}
async function create(req, res) {
  await User.create(req.body);
  res.status(200).json("ok");
}
