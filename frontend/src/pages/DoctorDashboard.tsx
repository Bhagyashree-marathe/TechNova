
import { useState } from "react"
import DoctorPatientSummary from "./DoctorPatientSummary"
import DoctorQRScanner from "./DoctorQRScanner"
import EmergencyPatientLookup from "./EmergencyPatientLookup"

type DoctorDashboardProps = {
  onBack: () => void
}

function DoctorDashboard({ onBack }: DoctorDashboardProps) {
  const [showPatientSummary, setShowPatientSummary] = useState(false)
  const [showQRScanner, setShowQRScanner] = useState(false)
  const [showEmergency, setShowEmergency] = useState(false)

  // ================= PATIENT SUMMARY =================
  if (showPatientSummary) {
    return (
      <DoctorPatientSummary
        onBack={() => setShowPatientSummary(false)}
      />
    )
  }
 if (showEmergency) {
  return (
    <EmergencyPatientLookup
      onBack={() => setShowEmergency(false)}
    />
  )
}
  // ================= QR SCANNER =================
  if (showQRScanner) {
    return (
      <DoctorQRScanner
        onBack={() => setShowQRScanner(false)}
        onPatientFound={() => {
          setShowQRScanner(false)
          setShowPatientSummary(true)
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">

      {/* Mobile App Container */}
      <div className="w-full max-w-md min-h-screen bg-slate-50 shadow-xl">

        {/* ================= HEADER ================= */}
        <header className="bg-white px-5 pt-5 pb-4 border-b border-slate-100">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              {/* Doctor Profile */}
              <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center">

                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.2 3.5-7 8-7s8 2.8 8 7" />
                </svg>

              </div>

              <div>

                <p className="text-xs text-slate-500">
                  Welcome back
                </p>

                <h1 className="text-lg font-bold text-slate-900">
                  Doctor Dashboard
                </h1>

              </div>

            </div>

            {/* Notification */}
            <button
              type="button"
              className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center"
            >
              🔔
            </button>

          </div>

        </header>


        {/* ================= MAIN ================= */}
        <main className="px-5 py-5 pb-10">

          {/* ================= BACK TO LANDING ================= */}
          <button
            type="button"
            onClick={onBack}
            className="mb-4 flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            ← Back
          </button>


          {/* ================= DOCTOR PROFILE ================= */}
          <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-5 text-white shadow-lg">

            <p className="text-xs text-blue-100">
              HEALTHCARE PROFESSIONAL
            </p>

            <h2 className="mt-2 text-xl font-bold">
              Dr. Priya Sharma
            </h2>

            <p className="mt-1 text-sm text-blue-100">
              General Physician
            </p>

            <div className="mt-5 flex items-center justify-between">

              <div>

                <p className="text-xs text-blue-100">
                  Doctor ID
                </p>

                <p className="mt-1 font-semibold">
                  DOC-2026-001
                </p>

              </div>

              <div className="rounded-xl bg-white/15 px-3 py-2">

                <span className="text-xs">
                  ✓ Verified
                </span>

              </div>

            </div>

          </section>


          {/* ================= FIND PATIENT ================= */}
          <section className="mt-6">

            <h2 className="mb-3 text-base font-bold text-slate-900">
              Find Patient
            </h2>

            <div className="rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">

              <div className="flex items-center gap-3">

                <span className="text-xl">
                  🔍
                </span>

                <input
                  type="text"
                  placeholder="Enter Health ID"
                  className="flex-1 outline-none text-sm text-slate-700"
                />

              </div>

              <button
                type="button"
                onClick={() => setShowPatientSummary(true)}
                className="mt-4 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
              >
                View Patient
              </button>

            </div>

          </section>


          {/* ================= QUICK ACTIONS ================= */}
          <section className="mt-6">

            <h2 className="mb-3 text-base font-bold text-slate-900">
              Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-3">

              {/* ================= SCAN HEALTH ID ================= */}
              <button
                type="button"
                onClick={() => setShowQRScanner(true)}
                className="rounded-2xl bg-white p-4 text-left border border-slate-100 shadow-sm hover:border-blue-200 transition active:scale-[0.98]"
              >

                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">

                  <span className="text-lg">
                    ▦
                  </span>

                </div>

                <p className="mt-3 text-sm font-semibold text-slate-900">
                  Scan Health ID
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Scan patient QR
                </p>

              </button>


              {/* ================= PATIENT RECORDS ================= */}
              <button
                type="button"
                onClick={() => setShowPatientSummary(true)}
                className="rounded-2xl bg-white p-4 text-left border border-slate-100 shadow-sm hover:border-blue-200 transition active:scale-[0.98]"
              >

                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">

                  <span className="text-lg">
                    👤
                  </span>

                </div>

                <p className="mt-3 text-sm font-semibold text-slate-900">
                  Patient Records
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  View health details
                </p>

              </button>

            </div>

          </section>


          {/* ================= RECENT PATIENTS ================= */}
          <section className="mt-6">

            <div className="flex items-center justify-between mb-3">

              <h2 className="text-base font-bold text-slate-900">
                Recent Patients
              </h2>

              <span className="text-xs text-slate-400">
                Today
              </span>

            </div>


            <button
              type="button"
              onClick={() => setShowPatientSummary(true)}
              className="w-full rounded-2xl bg-white p-4 border border-slate-100 shadow-sm text-left hover:border-blue-200 transition"
            >

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center">

                  <span className="text-blue-600 font-semibold">
                    AS
                  </span>

                </div>


                <div className="flex-1">

                  <p className="text-sm font-semibold text-slate-900">
                    Aarav Sharma
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    JEEVAN-2026-001
                  </p>

                </div>


                <span className="text-blue-600">
                  →
                </span>

              </div>

            </button>

          </section>


          {/* ================= EMERGENCY ================= */}
         <button
  type="button"
  onClick={() => setShowEmergency(true)}
  className="w-full text-left"
>
  <div className="rounded-2xl border border-red-200 bg-red-50 p-4 hover:bg-red-100 transition">

    <div className="flex items-center gap-3">

      <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center">
        🚨
      </div>

      <div>
        <p className="text-sm font-bold text-red-700">
          Emergency Access
        </p>

        <p className="mt-1 text-xs text-red-500">
          Access critical information when required
        </p>
      </div>

    </div>

  </div>
</button>


          {/* ================= SECURITY NOTICE ================= */}
          <section className="mt-5 rounded-2xl bg-white p-4 border border-slate-100">

            <p className="text-sm text-slate-600">
              🔒 Patient information is protected by role-based
              access and consent controls.
            </p>

          </section>

        </main>

      </div>

    </div>
  )
}

export default DoctorDashboard

