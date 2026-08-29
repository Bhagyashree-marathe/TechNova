const express = require("express");

const {
    getMyAuditLogs
} = require("../controllers/auditController");

const authMiddleware =
    require("../middleware/authMiddleware");

const router = express.Router();

router.get(
    "/",
    authMiddleware,
    getMyAuditLogs
);

module.exports = router;