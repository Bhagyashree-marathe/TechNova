# Jeevan Health ID - Security Rules

## 1. Authentication

All users must authenticate before accessing the system.

Authentication will be handled using:
- Mobile/Email
- Password or OTP
- Password hashing
- JWT-based authentication

Passwords must never be stored in plain text.

---

## 2. Role-Based Access Control

The system uses role-based access control.

### Patient
- Can view their own health information.
- Can grant consent.
- Can revoke consent.
- Can view their access history.

### Doctor
- Can access patient information only when authorized.
- Must have valid patient consent for normal medical-data access.
- Can access only the data permitted by the consent.

### Emergency Staff
- Can access limited emergency information during an emergency.
- Emergency access must be recorded in AuditLogs.

### Admin
- Can manage users and system configuration.
- Should not access complete medical information unless explicitly authorized.

---

## 3. Consent-Based Access

Patient consent is required for normal doctor access to medical information.

Access is allowed only when:

1. User is authenticated.
2. User has the required role.
3. Valid consent exists.
4. Consent status is Active.
5. Consent has not expired.
6. Requested data is included in the consent's accessType.

If any condition fails, access must be denied.

---

## 4. Consent Expiration

Every consent should have an expiry time.

Example:

grantedAt: 2026-08-29T10:00:00Z
expiresAt: 2026-08-29T18:00:00Z

After the expiry time, the consent is considered expired and access must be denied.

---

## 5. Consent Revocation

Patients can revoke previously granted consent.

When consent is revoked:

- Status becomes Revoked.
- Further access must be denied.
- The revocation must be recorded in AuditLogs.

---

## 6. Data-Level Access Control

Users should receive only the information they are authorized to access.

Example:

If consent allows:

- MedicalRecords
- Reports

The doctor must not receive:

- Medications
- Allergies
- Other restricted information

---

## 7. Emergency Access

Emergency access provides only essential information.

Emergency information may include:

- Patient name
- Blood group
- Allergies
- Critical medical conditions
- Emergency contact

Emergency access must not automatically provide the patient's complete medical history.

Every emergency access request must be recorded in AuditLogs.

---

## 8. Audit Logging

Important actions must be recorded.

Examples:

- LOGIN
- VIEW_PROFILE
- VIEW_MEDICAL_RECORD
- VIEW_REPORT
- DOWNLOAD_REPORT
- UPDATE_RECORD
- CONSENT_GRANTED
- CONSENT_REVOKED
- EMERGENCY_ACCESS

Audit logs should contain:

- User ID
- Patient Jeevan Health ID
- User role
- Action
- Purpose
- Timestamp
- Result

---

## 9. Data Protection

Sensitive health information must be protected.

Security measures include:

- HTTPS/TLS for data transmission.
- Password hashing using bcrypt or Argon2.
- Secure JWT handling.
- Encryption of sensitive data where required.
- Database credentials stored in environment variables.
- No passwords, API keys, or database credentials in GitHub.

---

## 10. API Security

Backend APIs must verify authentication and authorization before returning patient information.

Example:

Doctor requests medical records
        ↓
Verify JWT
        ↓
Verify user role
        ↓
Check patient consent
        ↓
Check consent expiry
        ↓
Check requested data permission
        ↓
Allow or deny access
        ↓
Create AuditLog

---

## 11. Unauthorized Access

The system must deny access when:

- User is not authenticated.
- JWT is invalid or expired.
- User does not have the required role.
- Consent does not exist.
- Consent is expired.
- Consent is revoked.
- Requested data is not included in consent.

---

## 12. Security Testing

The following cases should be tested:

### Test 1 - Valid Consent

Doctor + Active Consent + Allowed Data
→ Access Granted

### Test 2 - No Consent

Doctor + No Consent
→ Access Denied

### Test 3 - Expired Consent

Doctor + Expired Consent
→ Access Denied

### Test 4 - Revoked Consent

Doctor + Revoked Consent
→ Access Denied

### Test 5 - Restricted Data

Consent allows Reports
Doctor requests Medications
→ Access Denied

### Test 6 - Emergency Access

Emergency request
→ Limited information returned
→ AuditLog created