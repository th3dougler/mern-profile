const express = require("express");
const router = express.Router();
const apiCtrl = require("../../controllers/api/api");

router.get("/", apiCtrl.index);

router.post("/", apiCtrl.create);

module.exports = router;
