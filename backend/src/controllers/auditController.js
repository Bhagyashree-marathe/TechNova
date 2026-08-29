const AuditLog = require("../models/AuditLog");

const getMyAuditLogs = async (req, res) => {
    try {
        const logs = await AuditLog.find({
            patientId: req.patient.patientId
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: logs.length,
            logs
        });

    } catch (error) {
        console.error("Audit log error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while fetching audit logs"
        });
    }
};

module.exports = {
    getMyAuditLogs
};