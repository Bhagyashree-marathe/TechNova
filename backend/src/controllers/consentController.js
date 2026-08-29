const Consent = require("../models/Consent");
const Doctor = require("../models/Doctor");


// =====================================
// CREATE CONSENT REQUEST
// =====================================

const createConsent = async (req, res) => {
    try {
        const {
            doctorEmail,
            purpose,
            expiresAt
        } = req.body;

        if (!doctorEmail || !purpose) {
            return res.status(400).json({
                success: false,
                message: "Doctor email and purpose are required"
            });
        }

        const doctor = await Doctor.findOne({
            email: doctorEmail
        });

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor not found"
            });
        }

        const consent = await Consent.create({
            patientId: req.patient.patientId,
            doctorId: doctor._id,
            purpose,
            expiresAt: expiresAt || null
        });

        res.status(201).json({
            success: true,
            message: "Consent request created",
            consent
        });

    } catch (error) {
        console.error("Consent creation error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while creating consent"
        });
    }
};


// =====================================
// GET PATIENT CONSENTS
// =====================================

const getMyConsents = async (req, res) => {
    try {
        const consents = await Consent.find({
            patientId: req.patient.patientId
        })
            .populate(
                "doctorId",
                "fullName email specialization hospitalName"
            )
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            consents
        });

    } catch (error) {
        console.error("Get consent error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while fetching consents"
        });
    }
};


// =====================================
// GRANT CONSENT
// =====================================

const grantConsent = async (req, res) => {
    try {
        const { id } = req.params;

        const consent = await Consent.findOne({
            _id: id,
            patientId: req.patient.patientId
        });

        if (!consent) {
            return res.status(404).json({
                success: false,
                message: "Consent not found"
            });
        }

        consent.status = "Granted";
        consent.grantedAt = new Date();

        await consent.save();

        res.status(200).json({
            success: true,
            message: "Consent granted successfully",
            consent
        });

    } catch (error) {
        console.error("Grant consent error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while granting consent"
        });
    }
};


// =====================================
// REVOKE CONSENT
// =====================================

const revokeConsent = async (req, res) => {
    try {
        const { id } = req.params;

        const consent = await Consent.findOne({
            _id: id,
            patientId: req.patient.patientId
        });

        if (!consent) {
            return res.status(404).json({
                success: false,
                message: "Consent not found"
            });
        }

        consent.status = "Revoked";

        await consent.save();

        res.status(200).json({
            success: true,
            message: "Consent revoked successfully",
            consent
        });

    } catch (error) {
        console.error("Revoke consent error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while revoking consent"
        });
    }
};


module.exports = {
    createConsent,
    getMyConsents,
    grantConsent,
    revokeConsent
};