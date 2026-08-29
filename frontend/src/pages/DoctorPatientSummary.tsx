type DoctorPatientSummaryProps = {
  onBack: () => void
}

function DoctorPatientSummary({ onBack }: DoctorPatientSummaryProps) {
  const patient = {
    name: "Aarav Sharma",
    healthId: "JEEVAN-2026-001",
    dateOfBirth: "15 August 1998",
    gender: "Male",
    bloodGroup: "O+",
    allergies: "No known allergies",
    medications: "None",
    emergencyContact: "+91 XXXXX XXXXX",
    lastVisit: "25 August 2026",
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">

      {/* Mobile App Container */}
      <div className="w-full max-w-md min-h-screen bg-slate-50 shadow-xl">

        {/* ================= HEADER ================= */}
        <header className="bg-white px-5 pt-5 pb-4 border-b border-slate-100">

          <button
            type="button"
            onClick={onBack}
            className="mb-4 flex items-center gap-2 text-sm font-semibold text-blue-600"
          >
            ← Back
          </button>

          <div className="flex items-center gap-3">

            {/* Patient Avatar */}
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-lg font-bold text-blue-600">
                AS
              </span>
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                {patient.name}
              </h1>

              <p className="mt-1 text-sm text-blue-600 font-medium">
                {patient.healthId}
              </p>
            </div>

          </div>

        </header>


        {/* ================= MAIN ================= */}
        <main className="px-5 py-5 pb-10">

          {/* ================= ACCESS NOTICE ================= */}
          <section className="rounded-2xl border border-blue-200 bg-blue-50 p-4">

            <div className="flex items-start gap-3">

              <span className="text-xl">
                🔐
              </span>

              <div>
                <h2 className="font-bold text-blue-900">
                  Doctor Access
                </h2>

                <p className="mt-1 text-xs leading-5 text-blue-700">
                  You are viewing this patient's health information
                  as an authorized healthcare professional.
                </p>
              </div>

            </div>

          </section>


          {/* ================= PATIENT INFORMATION ================= */}
          <section className="mt-5 rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">

            <div className="p-5 border-b border-slate-100">

              <h2 className="font-bold text-slate-900">
                Patient Information
              </h2>

            </div>

            <div className="p-5 space-y-4">

              {/* Name */}
              <div>
                <p className="text-xs text-slate-500">
                  Full Name
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  {patient.name}
                </p>
              </div>

              {/* DOB and Gender */}
              <div className="grid grid-cols-2 gap-4">

                <div>
                  <p className="text-xs text-slate-500">
                    Date of Birth
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {patient.dateOfBirth}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Gender
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {patient.gender}
                  </p>
                </div>

              </div>

              {/* Health ID */}
              <div>
                <p className="text-xs text-slate-500">
                  Jeevan Health ID
                </p>

                <p className="mt-1 text-sm font-semibold text-blue-700">
                  {patient.healthId}
                </p>
              </div>

            </div>

          </section>


          {/* ================= CRITICAL HEALTH INFORMATION ================= */}
          <section className="mt-5">

            <h2 className="mb-3 text-base font-bold text-slate-900">
              Critical Health Information
            </h2>

            <div className="grid grid-cols-2 gap-3">

              {/* Blood Group */}
              <div className="rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">

                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <span className="text-lg">
                    🩸
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  Blood Group
                </p>

                <p className="mt-1 text-lg font-bold text-red-600">
                  {patient.bloodGroup}
                </p>

              </div>


              {/* Allergies */}
              <div className="rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">

                <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                  <span className="text-lg">
                    ⚠️
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  Allergies
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {patient.allergies}
                </p>

              </div>

            </div>

          </section>


          {/* ================= MEDICATIONS ================= */}
          <section className="mt-5 rounded-2xl bg-white border border-slate-100 shadow-sm p-5">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <span className="text-lg">
                  💊
                </span>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Current Medications
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  {patient.medications}
                </p>
              </div>

            </div>

          </section>


          {/* ================= MEDICAL HISTORY ================= */}
          <section className="mt-5 rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">

            <div className="p-5 border-b border-slate-100">

              <h2 className="font-bold text-slate-900">
                Medical History
              </h2>

            </div>

            <div className="p-5">

              {/* Record 1 */}
              <div className="flex gap-3">

                <div className="flex flex-col items-center">

                  <div className="w-3 h-3 rounded-full bg-blue-600" />

                  <div className="w-px h-16 bg-slate-200" />

                </div>

                <div className="pb-4">

                  <p className="text-xs text-slate-500">
                    25 August 2026
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    General Checkup
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Routine health examination.
                  </p>

                </div>

              </div>


              {/* Record 2 */}
              <div className="flex gap-3">

                <div className="flex flex-col items-center">

                  <div className="w-3 h-3 rounded-full bg-blue-600" />

                </div>

                <div>

                  <p className="text-xs text-slate-500">
                    10 June 2026
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    Blood Test
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Routine laboratory investigation.
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* ================= EMERGENCY CONTACT ================= */}
          <section className="mt-5 rounded-2xl bg-white border border-red-100 shadow-sm overflow-hidden">

            <div className="p-5 border-b border-red-100">

              <h2 className="font-bold text-slate-900">
                Emergency Contact
              </h2>

            </div>

            <div className="p-5 flex items-center justify-between">

              <div>

                <p className="text-xs text-slate-500">
                  Primary Contact
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {patient.emergencyContact}
                </p>

              </div>

              <button
                type="button"
                className="rounded-xl bg-green-100 px-4 py-2 text-sm font-semibold text-green-700"
              >
                Call
              </button>

            </div>

          </section>


          {/* ================= LAST VISIT ================= */}
          <section className="mt-5 rounded-2xl bg-white border border-slate-100 shadow-sm p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs text-slate-500">
                  Last Visit
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  {patient.lastVisit}
                </p>

              </div>

              <span className="rounded-lg bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Active
              </span>

            </div>

          </section>


          {/* ================= AUDIT NOTICE ================= */}
          <section className="mt-5 rounded-2xl border border-orange-200 bg-orange-50 p-4">

            <div className="flex items-start gap-3">

              <span className="text-lg">
                📋
              </span>

              <div>

                <h2 className="text-sm font-bold text-orange-800">
                  Access Recorded
                </h2>

                <p className="mt-1 text-xs leading-5 text-orange-700">
                  Your access to this patient's information is
                  recorded in the Jeevan audit log for security
                  and accountability.
                </p>

              </div>

            </div>

          </section>


          {/* ================= BACK BUTTON ================= */}
          <button
            type="button"
            onClick={onBack}
            className="w-full mt-6 rounded-xl border-2 border-blue-600 py-3.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
          >
            ← Back to Doctor Dashboard
          </button>

        </main>

      </div>

    </div>
  )
}

export default DoctorPatientSummary