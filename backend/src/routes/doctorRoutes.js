const express = require("express");

const {
    registerDoctor,
    loginDoctor,
    getPatientByHealthId
} = require("../controllers/doctorController");

const doctorMiddleware =
    require("../middleware/doctorMiddleware");

const router = express.Router();


// Doctor registration
router.post("/register", registerDoctor);


// Doctor login
router.post("/login", loginDoctor);


// Doctor accesses patient
router.get(
    "/patient/:healthId",
    doctorMiddleware,
    getPatientByHealthId
);


module.exports = router;