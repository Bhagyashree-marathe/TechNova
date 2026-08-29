const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Patient = require("../models/Patient");
const generateHealthId = require("../utils/generateHealthId");


// ===============================
// REGISTER PATIENT
// ===============================
const registerPatient = async (req, res) => {
    try {
        const {
            fullName,
            dateOfBirth,
            gender,
            mobile,
            email,
            password,
            emergencyContact
        } = req.body;

        // Check required fields
        if (
            !fullName ||
            !dateOfBirth ||
            !gender ||
            !mobile ||
            !email ||
            !password ||
            !emergencyContact
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields"
            });
        }

        // Check if patient already exists
        const existingPatient = await Patient.findOne({
            $or: [{ email }, { mobile }]
        });

        if (existingPatient) {
            return res.status(409).json({
                success: false,
                message: "Patient with this email or mobile already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate Health ID
        const healthId = generateHealthId();

        // Create patient
        const patient = await Patient.create({
            healthId,
            fullName,
            dateOfBirth,
            gender,
            mobile,
            email,
            password: hashedPassword,
            emergencyContact
        });

        return res.status(201).json({
            success: true,
            message: "Patient registered successfully",
            patient: {
                healthId: patient.healthId,
                fullName: patient.fullName,
                email: patient.email
            }
        });

    } catch (error) {
        console.error("Registration error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error during registration"
        });
    }
};


// ===============================
// LOGIN PATIENT
// ===============================
const loginPatient = async (req, res) => {
    try {
        const { identifier, password } = req.body;

        // Check required fields
        if (!identifier || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide Health ID/mobile number and password"
            });
        }

        // Find patient using Health ID OR mobile number
        const patient = await Patient.findOne({
            $or: [
                { healthId: identifier },
                { mobile: identifier }
            ]
        });

        if (!patient) {
            return res.status(401).json({
                success: false,
                message: "Invalid Health ID/mobile number or password"
            });
        }

        // Compare entered password with hashed password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            patient.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid Health ID/mobile number or password"
            });
        }

        // Create JWT token
        const token = jwt.sign(
            {
                patientId: patient._id,
                healthId: patient.healthId
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            patient: {
                healthId: patient.healthId,
                fullName: patient.fullName,
                email: patient.email,
                mobile: patient.mobile
            }
        });

    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error during login"
        });
    }
};


// ===============================
// EXPORT
// ===============================
module.exports = {
    registerPatient,
    loginPatient
};