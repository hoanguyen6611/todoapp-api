const authController = require("../controllers/authController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();
//ADD USER
router.post("/register", authController.registerUser);
//LOGIN USER
router.post("/login", authController.loginUser);
//REFRESH
router.post("/refresh", authController.requestRefreshToken);
//LOGOUT
router.post(
  "/logout",
  middlewareController.verifyToken,
  authController.logoutUser
);

module.exports = router;
