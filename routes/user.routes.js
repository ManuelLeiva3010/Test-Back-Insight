const express = require("express");
const router = express.Router();

const _userController = require("../controllers/user.js");


router.post("/user/user", _userController.createUser);
router.get("/user/users", _userController.getUsers)
router.get("/user/user/:id", _userController.getUser);
// router.put("/user/:id", _userController.updateUser);
// router.delete("/user/:id", _userController.deleteUser);




module.exports = router;