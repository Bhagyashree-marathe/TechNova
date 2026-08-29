const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
    {
        healthId: {
            type: String,
            required: true,
            unique: true
        },

        fullName: {
            type: String,
            required: true,
            trim: true
        },

        dateOfBirth: {
            type: Date,
            required: true
        },

        gender: {
            type: String,
            required: true,
            enum: ["Male", "Female", "Other"]
        },

        mobile: {
            type: String,
            required: true,
            unique: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        password: {
            type: String,
            required: true
        },

        emergencyContact: {
            name: {
                type: String,
                required: true
            },

            relation: {
                type: String,
                required: true
            },

            phone: {
                type: String,
                required: true
            }
        },

        // =========================
        // Medical Information
        // =========================

        bloodGroup: {
            type: String,
            default: ""
        },

        allergies: {
            type: [String],
            default: []
        },

        chronicConditions: {
            type: [String],
            default: []
        },

        currentMedications: {
            type: [String],
            default: []
        },

        height: {
            type: Number,
            default: null
        },

        weight: {
            type: Number,
            default: null
        }
    },

    {
        timestamps: true
    }
);

module.exports =
    mongoose.models.Patient || mongoose.model("Patient", patientSchema);

