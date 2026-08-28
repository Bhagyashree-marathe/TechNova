import React from "react"

type EmergencyAccessProps = {
  onBack?: () => void
}

function EmergencyAccess({ onBack }: EmergencyAccessProps) {
  const patient = {
    name: "Aarav Sharma",
    healthId: "JEEVAN-2026-001",
    bloodGroup: "O+",
    allergies: "No known allergies",
    medications: "None",
    emergencyContact: "+91 XXXXX XXXXX",
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">

      {/* Mobile App Container */}
      <div className="w-full max-w-md min-h-screen bg-slate-50 shadow-xl">

        {/* Header */}
        <header className="bg-white px-5 pt-5 pb-4 border-b border-slate-100">

          <button
            type="button"
            onClick={onBack}
            className="mb-4 text-blue-600 font-medium"
          >
            ← Back
          </button>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
              <span className="text-2xl">
                🚨
              </span>
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Emergency Access
              </h1>

              <p className="text-sm text-slate-500">
                Critical health information
              </p>
            </div>

          </div>

        </header>

        <main className="px-5 py-5 pb-10">

          {/* Emergency Warning */}
          <section className="rounded-2xl border border-red-200 bg-red-50 p-5">

            <div className="flex items-start gap-3">

              <span className="text-xl">
                ⚠️
              </span>

              <div>
                <h2 className="font-bold text-red-700">
                  Emergency Mode
                </h2>

                <p className="mt-1 text-sm text-red-600">
                  This section provides essential health information
                  that may help healthcare professionals during an
                  emergency.
                </p>
              </div>

            </div>

          </section>

          {/* Patient Identity */}
          <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

            <h2 className="text-base font-bold text-slate-900">
              Patient Identity
            </h2>

            <div className="mt-4 space-y-3">

              <div className="flex justify-between border-b border-slate-100 pb-3">
                <span className="text-sm text-slate-500">
                  Name
                </span>

                <span className="text-sm font-semibold text-slate-900">
                  {patient.name}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-slate-500">
                  Health ID
                </span>

                <span className="text-sm font-semibold text-blue-700">
                  {patient.healthId}
                </span>
              </div>

            </div>

          </section>

          {/* Critical Information */}
          <section className="mt-5">

            <h2 className="mb-3 text-base font-bold text-slate-900">
              Critical Information
            </h2>

            <div className="grid grid-cols-2 gap-3">

              {/* Blood Group */}
              <div className="rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">

                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold">
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
                  <span className="text-yellow-600">
                    ⚠
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

          {/* Medications */}
          <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

            <h2 className="font-bold text-slate-900">
              Current Medications
            </h2>

            <div className="mt-3 rounded-xl bg-blue-50 p-4">

              <p className="text-sm text-blue-800">
                💊 {patient.medications}
              </p>

            </div>

          </section>

          {/* Emergency Contact */}
          <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

            <h2 className="font-bold text-slate-900">
              Emergency Contact
            </h2>

            <div className="mt-3 flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  Primary Contact
                </p>

                <p className="mt-1 font-semibold text-slate-900">
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

          {/* Break Glass Access */}
          <section className="mt-5 rounded-2xl border border-orange-200 bg-orange-50 p-5">

            <h2 className="font-bold text-orange-800">
              🔓 Break-Glass Access
            </h2>

            <p className="mt-2 text-sm text-orange-700">
              In a life-threatening emergency, authorized healthcare
              professionals may access limited critical information.
              Such access is recorded in the audit log.
            </p>

          </section>

          {/* Security Notice */}
          <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100">

            <div className="flex gap-3">

              <span className="text-lg">
                🔒
              </span>

              <p className="text-sm text-slate-600">
                Emergency access is temporary and monitored.
                Every access attempt can be recorded for security
                and accountability.
              </p>

            </div>

          </section>

        </main>

      </div>
    </div>
  )
}

export default EmergencyAccess