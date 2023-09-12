const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/").get(allUsers);

module.exports = router;
