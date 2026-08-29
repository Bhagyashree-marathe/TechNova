const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const patientRoutes = require("./routes/patientRoutes");
const medicalRecordRoutes = require("./routes/medicalRecordRoutes");
const doctorRoutes =
    require("./routes/doctorRoutes");

const consentRoutes =
    require("./routes/consentRoutes");

const emergencyRoutes =
    require("./routes/emergencyRoutes");

const auditRoutes =
    require("./routes/auditRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Jeevan Health ID Backend is running"
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/medical-records", medicalRecordRoutes);
app.use("/api/doctor", doctorRoutes);

app.use("/api/consent", consentRoutes);

app.use("/api/emergency", emergencyRoutes);

app.use("/api/audit-logs", auditRoutes);

module.exports = app;