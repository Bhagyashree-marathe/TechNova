const MedicalRecord = require("../models/MedicalRecord");

// =====================================
// ADD MEDICAL RECORD
// =====================================
const addMedicalRecord = async (req, res) => {
    try {
        const {
            recordType,
            title,
            description,
            doctorName,
            hospitalName,
            date
        } = req.body;

        // Check required fields
        if (!recordType || !title || !date) {
            return res.status(400).json({
                success: false,
                message: "Record type, title and date are required"
            });
        }

        // Create record for logged-in patient
        const medicalRecord = await MedicalRecord.create({
            patientId: req.patient.patientId,
            recordType,
            title,
            description,
            doctorName,
            hospitalName,
            date
        });

        return res.status(201).json({
            success: true,
            message: "Medical record added successfully",
            record: medicalRecord
        });

    } catch (error) {
        console.error("Add medical record error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error while adding medical record"
        });
    }
};


// =====================================
// GET MEDICAL RECORDS
// =====================================
const getMedicalRecords = async (req, res) => {
    try {
        const records = await MedicalRecord.find({
            patientId: req.patient.patientId
        }).sort({ date: -1 });

        return res.status(200).json({
            success: true,
            count: records.length,
            records
        });

    } catch (error) {
        console.error("Get medical records error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error while fetching medical records"
        });
    }
};


module.exports = {
    addMedicalRecord,
    getMedicalRecords
};