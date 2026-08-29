const express = require("express");

const {
    addMedicalRecord,
    getMedicalRecords
} = require("../controllers/medicalRecordController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// Add medical record
router.post(
    "/",
    authMiddleware,
    addMedicalRecord
);


// Get logged-in patient's records
router.get(
    "/",
    authMiddleware,
    getMedicalRecords
);


module.exports = router;