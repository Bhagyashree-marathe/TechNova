import React from "react"

type PatientProfileProps = {
  onBack?: () => void
}

function PatientProfile({ onBack }: PatientProfileProps) {
  const patient = {
    name: "Aarav Sharma",
    healthId: "JEEVAN-2026-001",
    dateOfBirth: "15 August 1998",
    gender: "Male",
    mobile: "+91 XXXXX XXXXX",
    bloodGroup: "O+",
    address: "Nashik, Maharashtra, India",
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

          <div className="flex items-center gap-4">

            {/* Profile Avatar */}
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">

              <svg
                viewBox="0 0 24 24"
                className="w-9 h-9 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.2 3.5-7 8-7s8 2.8 8 7" />
              </svg>

            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                {patient.name}
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                {patient.healthId}
              </p>
            </div>

          </div>

        </header>

        <main className="px-5 py-5 pb-10">

          {/* Profile Information */}
          <section className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">

            <div className="p-5 border-b border-slate-100 flex items-center justify-between">

              <h2 className="font-bold text-slate-900">
                Personal Information
              </h2>

              <button
                type="button"
                className="text-sm font-semibold text-blue-600"
              >
                Edit
              </button>

            </div>

            <div className="p-5 space-y-4">

              <div>
                <p className="text-xs text-slate-500">
                  Full Name
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  {patient.name}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <p className="text-xs text-slate-500">
                    Date of Birth
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {patient.dateOfBirth}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Gender
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {patient.gender}
                  </p>
                </div>

              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Mobile Number
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  {patient.mobile}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Address
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  {patient.address}
                </p>
              </div>

            </div>

          </section>


          {/* Medical Information */}
          <section className="mt-5 rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">

            <div className="p-5 border-b border-slate-100">

              <h2 className="font-bold text-slate-900">
                Medical Information
              </h2>

            </div>

            <div className="p-5">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-slate-500">
                    Blood Group
                  </p>

                  <p className="mt-1 text-lg font-bold text-red-600">
                    🩸 {patient.bloodGroup}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <span className="text-xl">
                    🩸
                  </span>
                </div>

              </div>

            </div>

          </section>


          {/* Emergency Contact */}
          <section className="mt-5 rounded-2xl border border-red-100 bg-white shadow-sm overflow-hidden">

            <div className="p-5 border-b border-red-100">

              <h2 className="font-bold text-slate-900">
                Emergency Contact
              </h2>

            </div>

            <div className="p-5 flex items-center justify-between">

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
                className="rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-600"
              >
                Call
              </button>

            </div>

          </section>


          {/* Security */}
          <section className="mt-5 rounded-2xl bg-blue-50 border border-blue-100 p-5">

            <div className="flex gap-3">

              <span className="text-xl">
                🔒
              </span>

              <div>

                <h2 className="font-semibold text-blue-900">
                  Your data is protected
                </h2>

                <p className="mt-1 text-sm text-blue-700">
                  Your personal and health information is securely
                  managed through your Jeevan Health ID.
                </p>

              </div>

            </div>

          </section>

        </main>

      </div>
    </div>
  )
}

export default PatientProfile