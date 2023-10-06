const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controller/Messagecontroll");
const { protect } = require("../middleware/middle");

const router = express.Router();

router.route("/:chatId").get(protect,allMessages);
router.route("/").post(protect,sendMessage);

module.exports = router;