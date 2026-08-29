const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true
        },

        recordType: {
            type: String,
            required: true,
            enum: [
                "Diagnosis",
                "Medication",
                "Hospital Visit",
                "Surgery",
                "Test",
                "Allergy",
                "Other"
            ]
        },

        title: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            default: ""
        },

        doctorName: {
            type: String,
            default: ""
        },

        hospitalName: {
            type: String,
            default: ""
        },

        date: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("MedicalRecord", medicalRecordSchema);