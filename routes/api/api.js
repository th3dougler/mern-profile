const express = require("express");
const router = express.Router();
const contactController = require("../../controllers/api/contact/contactController");
const noteController = require("../../controllers/api/note/noteController");

router.get("/contact", contactController.index);

router.post("/contact", contactController.create);

router.get("/note", noteController.index);

router.post("/note", noteController.create);

module.exports = router;
