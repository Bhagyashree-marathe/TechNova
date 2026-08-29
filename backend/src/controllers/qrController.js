const QRCode = require("qrcode");
const Patient = require("../models/patient");

const generatePatientQR = async (req, res) => {
    try {
        const patient = await Patient.findById(req.patient.patientId);

        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Patient not found"
            });
        }

        // Data stored inside the QR
        const qrData = JSON.stringify({
            healthId: patient.healthId
        });

        // Generate QR image as Data URL
        const qrCode = await QRCode.toDataURL(qrData);

        return res.status(200).json({
            success: true,
            healthId: patient.healthId,
            qrCode
        });

    } catch (error) {
        console.error("QR generation error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error while generating QR code"
        });
    }
};

module.exports = {
    generatePatientQR
};