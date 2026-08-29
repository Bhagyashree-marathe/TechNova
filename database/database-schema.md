# Jeevan Health ID - Database Schema

## Database

Database Name: JeevanHealthdb

Database Type: MongoDB

## Collections

The Jeevan Health ID system contains the following collections:

1. users
2. patients
3. doctors
4. hospitals
5. MedicalRecords
6. allergies
7. medications
8. reports
9. encounters
10. consent
11. auditlogs

---

## 1. users

Stores login and basic user account information.

Fields:

- userId
- name
- email
- mobile
- passwordHash
- role
- status
- createdAt

Roles:

- Patient
- Doctor
- Hospital
- Admin

---

## 2. patients

Stores patient identity and emergency information.

Fields:

- jeevanHealthId
- name
- dob
- gender
- mobile
- bloodGroup
- abhaId
- emergencyContact

---

## 3. doctors

Stores doctor information.

Fields:

- doctorId
- userId
- name
- specialization
- registrationNumber
- hospitalId
- mobile
- email

---

## 4. hospitals

Stores hospital information.

Fields:

- hospitalId
- hospitalName
- address
- city
- phone
- email

---

## 5. MedicalRecords

Stores patient's medical history and clinical records.

Fields:

- recordId
- jeevanHealthId
- doctorId
- hospitalId
- diagnosis
- symptoms
- treatment
- notes
- date

---

## 6. allergies

Stores patient allergy information.

Fields:

- allergyId
- jeevanHealthId
- allergen
- reaction
- severity
- recordedBy
- date

---

## 7. medications

Stores medicines prescribed to patients.

Fields:

- medicationId
- jeevanHealthId
- doctorId
- medicineName
- dosage
- frequency
- startDate
- endDate
- status

---

## 8. reports

Stores medical report information.

Fields:

- reportId
- jeevanHealthId
- reportType
- title
- uploadedBy
- date
- fileUrl
- description

One patient can have multiple reports.

Example:

Patient JHID-8F72A91X

- REP001 → Blood Test
- REP002 → X-Ray
- REP003 → MRI

---

## 9. encounters

Stores patient visits and consultations.

Fields:

- encounterId
- jeevanHealthId
- doctorId
- hospitalId
- encounterType
- date
- reason
- diagnosis
- notes

---

## 10. consent

Stores patient permission for accessing health information.

Fields:

- consentId
- jeevanHealthId
- doctorId
- hospitalId
- accessType
- purpose
- grantedAt
- expiresAt
- status

Possible status:

- Pending
- Active
- Revoked
- Expired

---

## 11. auditlogs

Stores records of important system and data-access activities.

Fields:

- logId
- jeevanHealthId
- userId
- userRole
- action
- purpose
- timestamp
- result

Examples of actions:

- LOGIN
- VIEW_PROFILE
- VIEW_MEDICAL_RECORD
- VIEW_REPORT
- DOWNLOAD_REPORT
- UPDATE_RECORD
- CONSENT_GRANTED
- CONSENT_REVOKED
- EMERGENCY_ACCESS