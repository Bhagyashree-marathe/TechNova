const express = require("express");

const {
    emergencyAccess
} = require("../controllers/emergencyController");

const router = express.Router();

router.post(
    "/access",
    emergencyAccess
);

module.exports = router;