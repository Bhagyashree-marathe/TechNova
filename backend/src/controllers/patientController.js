const Patient = require("../models/patient");
const MedicalRecord = require("../models/MedicalRecord");

const getHealthSummary = async (req, res) => {
    try {
        const patient = await Patient.findById(req.patient.patientId)
            .select("-password");

        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Patient not found"
            });
        }

        const recentRecords = await MedicalRecord.find({
            patientId: patient._id
        })
            .sort({ date: -1 })
            .limit(5);

        return res.status(200).json({
            success: true,
            patient: {
                healthId: patient.healthId,
                fullName: patient.fullName,
                dateOfBirth: patient.dateOfBirth,
                gender: patient.gender,
                mobile: patient.mobile,
                email: patient.email,
                bloodGroup: patient.bloodGroup,
                allergies: patient.allergies,
                chronicConditions: patient.chronicConditions,
                currentMedications: patient.currentMedications,
                height: patient.height,
                weight: patient.weight
            },
            recentRecords
        });

    } catch (error) {
        console.error("Health summary error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error while fetching health summary"
        });
    }
};

module.exports = {
    getHealthSummary
};