const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        mobile: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },

        specialization: {
            type: String,
            default: ""
        },

        hospitalName: {
            type: String,
            default: ""
        },

        registrationNumber: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

module.exports =
    mongoose.models.Doctor ||
    mongoose.model("Doctor", doctorSchema);