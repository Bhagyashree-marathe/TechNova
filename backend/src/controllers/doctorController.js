const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Doctor = require("../models/doctor");
const Patient = require("../models/patient");
const Consent = require("../models/consent");
const MedicalRecord = require("../models/MedicalRecord");


// =====================================
// DOCTOR REGISTER
// =====================================

const registerDoctor = async (req, res) => {
    try {
        const {
            fullName,
            email,
            mobile,
            password,
            specialization,
            hospitalName,
            registrationNumber
        } = req.body;

        if (!fullName || !email || !mobile || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields"
            });
        }

        const existingDoctor = await Doctor.findOne({
            $or: [{ email }, { mobile }]
        });

        if (existingDoctor) {
            return res.status(409).json({
                success: false,
                message: "Doctor with this email or mobile already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const doctor = await Doctor.create({
            fullName,
            email,
            mobile,
            password: hashedPassword,
            specialization,
            hospitalName,
            registrationNumber
        });

        res.status(201).json({
            success: true,
            message: "Doctor registered successfully",
            doctor: {
                id: doctor._id,
                fullName: doctor.fullName,
                email: doctor.email,
                specialization: doctor.specialization
            }
        });

    } catch (error) {
        console.error("Doctor registration error:", error);

        res.status(500).json({
            success: false,
            message: "Server error during doctor registration"
        });
    }
};


// =====================================
// DOCTOR LOGIN
// =====================================

const loginDoctor = async (req, res) => {
    try {
        const { identifier, password } = req.body;

        if (!identifier || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide email/mobile and password"
            });
        }

        const doctor = await Doctor.findOne({
            $or: [
                { email: identifier },
                { mobile: identifier }
            ]
        });

        if (!doctor) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const passwordCorrect = await bcrypt.compare(
            password,
            doctor.password
        );

        if (!passwordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            {
                doctorId: doctor._id,
                role: "doctor"
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            success: true,
            message: "Doctor login successful",
            token,
            doctor: {
                id: doctor._id,
                fullName: doctor.fullName,
                email: doctor.email,
                specialization: doctor.specialization,
                hospitalName: doctor.hospitalName
            }
        });

    } catch (error) {
        console.error("Doctor login error:", error);

        res.status(500).json({
            success: false,
            message: "Server error during doctor login"
        });
    }
};


// =====================================
// DOCTOR SEARCH PATIENT
// =====================================

const getPatientByHealthId = async (req, res) => {
    try {
        const { healthId } = req.params;

        const patient = await Patient.findOne({
            healthId
        }).select("-password");

        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Patient not found"
            });
        }

        // Check whether doctor has granted consent
        const consent = await Consent.findOne({
            patientId: patient._id,
            doctorId: req.doctor.doctorId,
            status: "Granted"
        });

        if (!consent) {
            return res.status(403).json({
                success: false,
                message: "Patient has not granted access"
            });
        }

        const records = await MedicalRecord.find({
            patientId: patient._id
        }).sort({ date: -1 });

        res.status(200).json({
            success: true,
            patient,
            records
        });

    } catch (error) {
        console.error("Doctor patient search error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while fetching patient"
        });
    }
};


module.exports = {
    registerDoctor,
    loginDoctor,
    getPatientByHealthId
};
