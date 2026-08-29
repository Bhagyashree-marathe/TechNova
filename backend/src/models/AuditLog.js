const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true
        },

        accessedBy: {
            type: String,
            required: true
        },

        accessType: {
            type: String,
            required: true
        },

        purpose: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

module.exports =
    mongoose.models.AuditLog ||
    mongoose.model("AuditLog", auditLogSchema);