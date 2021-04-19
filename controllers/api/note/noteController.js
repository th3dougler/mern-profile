const Note = require("../../../models/noteModel");
module.exports = {
  index,
  create,
};
async function index(req, res) {
  let noteList = await Note.find({}).sort({ createdAt: "desc" });
  res.json(noteList);
}
async function create(req, res) {
  await Note.create(req.body);
  res.status(200).json("ok");
}
