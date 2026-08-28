import { useState } from "react"
import PatientHealthSummary from "./PatientHealthSummary"
import MedicalTimeline from "./MedicalTimeline"
import PatientQRCode from "./PatientQRCode"
import ShareConsent from "./ShareConsent"
import EmergencyAccess from "./EmergencyAccess"

function PatientDashboard() {
  const [showHealthSummary, setShowHealthSummary] = useState(false)
  const [showMedicalTimeline, setShowMedicalTimeline] = useState(false)
  const [showPatientQRCode, setShowPatientQRCode] = useState(false)
  const [showShareConsent, setShowShareConsent] = useState(false)
  const [showEmergencyAccess, setShowEmergencyAccess] = useState(false)

  // Open Health Summary
  if (showHealthSummary) {
    return (
      <PatientHealthSummary
        onBack={() => setShowHealthSummary(false)}
      />
    )
  }

  // Open Medical Timeline
  if (showMedicalTimeline) {
    return (
      <MedicalTimeline
        onBack={() => setShowMedicalTimeline(false)}
      />
    )
  }

  // Open QR Health ID
  if (showPatientQRCode) {
    return (
      <PatientQRCode
        onBack={() => setShowPatientQRCode(false)}
      />
    )
  }

  // Open Share & Consent
  if (showShareConsent) {
    return (
      <ShareConsent
        onBack={() => setShowShareConsent(false)}
      />
    )
  }

  // Open Emergency Access
  if (showEmergencyAccess) {
    return (
      <EmergencyAccess
        onBack={() => setShowEmergencyAccess(false)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">

      {/* Mobile App Container */}
      <div className="w-full max-w-md min-h-screen bg-slate-50 shadow-xl">

        {/* Header */}
        <header className="bg-white px-5 pt-5 pb-4 border-b border-slate-100">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              {/* Profile */}
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
                  My Health
                </h1>
              </div>

            </div>

            {/* Notification */}
            <button
              type="button"
              className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-slate-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                <path d="M10 21h4" />
              </svg>
            </button>

          </div>

        </header>


        {/* Main */}
        <main className="px-5 py-5 pb-24">

          {/* Health ID Card */}
          <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-5 text-white shadow-lg">

            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs text-blue-100">
                  JEEVAN HEALTH ID
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  Your Digital Health Identity
                </h2>
              </div>

              {/* Shield */}
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">

                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M12 3l7 3v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>

              </div>

            </div>

            <div className="mt-6 flex items-end justify-between">

              <div>
                <p className="text-xs text-blue-100">
                  HEALTH ID
                </p>

                <p className="mt-1 text-base font-semibold tracking-wider">
                  XXXX XXXX XXXX
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowPatientQRCode(true)}
                className="px-3 py-2 rounded-lg bg-white text-blue-700 text-xs font-semibold"
              >
                View ID
              </button>

            </div>

          </section>


          {/* Quick Access */}
          <section className="mt-6">

            <div className="flex items-center justify-between mb-3">

              <h2 className="text-base font-bold text-slate-900">
                Quick Access
              </h2>

              <span className="text-xs text-slate-400">
                Your health
              </span>

            </div>

            <div className="grid grid-cols-2 gap-3">

              {/* Health Summary */}
              <button
                type="button"
                onClick={() => setShowHealthSummary(true)}
                className="text-left bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:border-blue-200 transition"
              >

                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">

                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M5 4h14v16H5z" />
                    <path d="M8 8h8M8 12h8M8 16h5" />
                  </svg>

                </div>

                <p className="mt-3 font-semibold text-sm text-slate-900">
                  Health Summary
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Important health details
                </p>

              </button>


              {/* Medical Timeline */}
              <button
                type="button"
                onClick={() => setShowMedicalTimeline(true)}
                className="text-left bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:border-blue-200 transition"
              >

                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">

                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M5 5h14v14H5z" />
                    <path d="M8 9h8M8 13h5" />
                  </svg>

                </div>

                <p className="mt-3 font-semibold text-sm text-slate-900">
                  Medical Timeline
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Visits and medical records
                </p>

              </button>


              {/* QR Health ID */}
              <button
                type="button"
                onClick={() => setShowPatientQRCode(true)}
                className="text-left bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:border-blue-200 transition"
              >

                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">

                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
                    <path d="M14 14h3v3h-3zM18 18h2v2h-2zM18 14h2" />
                  </svg>

                </div>

                <p className="mt-3 font-semibold text-sm text-slate-900">
                  My QR Health ID
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Show your secure QR
                </p>

              </button>


              {/* Share & Consent */}
              <button
                type="button"
                onClick={() => setShowShareConsent(true)}
                className="text-left bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:border-blue-200 transition"
              >

                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">

                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="18" cy="5" r="2" />
                    <circle cx="6" cy="12" r="2" />
                    <circle cx="18" cy="19" r="2" />
                    <path d="m8 11 8-5M8 13l8 5" />
                  </svg>

                </div>

                <p className="mt-3 font-semibold text-sm text-slate-900">
                  Share & Consent
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Control data access
                </p>

              </button>

            </div>

          </section>


          {/* Emergency */}
          <section className="mt-6">

            <button
              type="button"
              onClick={() => setShowEmergencyAccess(true)}
              className="w-full rounded-2xl bg-red-50 border border-red-200 p-4 flex items-center justify-between"
            >

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center">

                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3v8" />
                    <path d="M7 6a7 7 0 1 0 10 0" />
                    <path d="M9 20h6" />
                    <path d="M10 17h4" />
                  </svg>

                </div>

                <div className="text-left">

                  <p className="font-bold text-sm text-red-700">
                    Emergency Access
                  </p>

                  <p className="text-xs text-red-500 mt-1">
                    Critical health information
                  </p>

                </div>

              </div>

              <span className="text-red-600 text-xl">
                →
              </span>

            </button>

          </section>


          {/* Recent Activity */}
          <section className="mt-6">

            <div className="flex items-center justify-between mb-3">

              <h2 className="text-base font-bold text-slate-900">
                Recent Activity
              </h2>

              <button
                type="button"
                className="text-xs font-semibold text-blue-600"
              >
                View All
              </button>

            </div>

            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">

              <div className="p-4 flex items-center gap-3 border-b border-slate-100">

                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600">
                    ✓
                  </span>
                </div>

                <div className="flex-1">

                  <p className="text-sm font-semibold text-slate-800">
                    Health profile updated
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    Recently
                  </p>

                </div>

              </div>


              <div className="p-4 flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <span className="text-green-600">
                    ✓
                  </span>
                </div>

                <div className="flex-1">

                  <p className="text-sm font-semibold text-slate-800">
                    Secure access enabled
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    Recently
                  </p>

                </div>

              </div>

            </div>

          </section>

        </main>


        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-slate-100 px-5 py-3">

          <div className="flex items-center justify-around">

            {/* Home */}
            <button
              type="button"
              className="flex flex-col items-center gap-1 text-blue-600"
            >

              <span className="text-lg">
                ⌂
              </span>

              <span className="text-[10px] font-semibold">
                Home
              </span>

            </button>


            {/* Health */}
            <button
              type="button"
              onClick={() => setShowHealthSummary(true)}
              className="flex flex-col items-center gap-1 text-slate-400"
            >

              <span className="text-lg">
                ♥
              </span>

              <span className="text-[10px]">
                Health
              </span>

            </button>


            {/* QR - FIXED */}
            <button
              type="button"
              onClick={() => setShowPatientQRCode(true)}
              className="flex flex-col items-center gap-1 text-slate-400"
            >

              <span className="text-lg">
                ▦
              </span>

              <span className="text-[10px]">
                QR
              </span>

            </button>


            {/* Profile */}
            <button
              type="button"
              className="flex flex-col items-center gap-1 text-slate-400"
            >

              <span className="text-lg">
                ●
              </span>

              <span className="text-[10px]">
                Profile
              </span>

            </button>

          </div>

        </nav>

      </div>

    </div>
  )
}

export default PatientDashboard