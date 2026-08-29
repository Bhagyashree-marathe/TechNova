const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
    getHealthSummary
} = require("../controllers/patientController");

const {
    generatePatientQR
} = require("../controllers/qrController");

const router = express.Router();


// ===============================
// Test / Profile Route
// ===============================
router.get("/profile", authMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        message: "You are authenticated",
        patient: req.patient
    });
});


// ===============================
// Patient Health Summary
// ===============================
router.get(
    "/health-summary",
    authMiddleware,
    getHealthSummary
);


// ===============================
// Patient QR Code
// ===============================
router.get(
    "/qr",
    authMiddleware,
    generatePatientQR
);


module.exports = router;