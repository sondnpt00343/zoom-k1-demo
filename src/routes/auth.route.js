const express = require("express");

const authController = require("@/controllers/auth.controller");
const authRequired = require("@/middlewares/authRequired");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refresh-token", authController.refreshToken);

router.get("/me", authRequired, authController.getCurrentUser);

module.exports = router;

// 1. Websocket - Realtime App (Chat, Notification, ...)
// 2. AI Platform (OpenAI API, Gemini API, ...)
// 3. HSL - video streaming
// 4. Payment
