const express = require("express");

const {
    createConsent,
    getMyConsents,
    grantConsent,
    revokeConsent
} = require("../controllers/consentController");

const authMiddleware =
    require("../middleware/authMiddleware");

const router = express.Router();


// Create consent
router.post(
    "/",
    authMiddleware,
    createConsent
);


// Get patient's consents
router.get(
    "/",
    authMiddleware,
    getMyConsents
);


// Grant consent
router.put(
    "/:id/grant",
    authMiddleware,
    grantConsent
);


// Revoke consent
router.put(
    "/:id/revoke",
    authMiddleware,
    revokeConsent
);


module.exports = router;