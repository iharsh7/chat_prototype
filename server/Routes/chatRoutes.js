const express = require("express");
const {
  accessChat,
  fetchChats,
} = require("../controller/Chatcontrol");
const {protect} = require("../middleware/middle")

const router = express.Router();

router.route("/").post(protect,accessChat);
router.route("/").get(protect,fetchChats);


module.exports = router;