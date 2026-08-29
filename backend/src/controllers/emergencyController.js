const Patient = require("../models/patient");
const AuditLog = require("../models/AuditLog");

const emergencyAccess = async (req, res) => {
    try {
        const { healthId, reason } = req.body;

        if (!healthId || !reason) {
            return res.status(400).json({
                success: false,
                message: "Health ID and emergency reason are required"
            });
        }

        const patient = await Patient.findOne({
            healthId
        }).select("-password");

        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Patient not found"
            });
        }

        // Log emergency access
        await AuditLog.create({
            patientId: patient._id,
            accessedBy: "Emergency User",
            accessType: "Emergency Access",
            purpose: reason
        });

        // Return ONLY emergency-critical information
        res.status(200).json({
            success: true,
            message: "Emergency information retrieved",
            emergencyData: {
                healthId: patient.healthId,
                fullName: patient.fullName,
                bloodGroup: patient.bloodGroup,
                allergies: patient.allergies,
                chronicConditions: patient.chronicConditions,
                currentMedications: patient.currentMedications,
                emergencyContact: patient.emergencyContact
            }
        });

    } catch (error) {
        console.error("Emergency access error:", error);

        res.status(500).json({
            success: false,
            message: "Server error during emergency access"
        });
    }
};

module.exports = {
    emergencyAccess
};