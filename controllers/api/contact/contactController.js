const Contact = require("../../../models/contactModel");
module.exports = {
  index,
  create,
};
async function index(req, res) {
  let contactList = await Comment.find({});
  res.json(contactList);
}
async function create(req, res) {
  await Contact.create(req.body);
  res.status(200).json("ok");
}
