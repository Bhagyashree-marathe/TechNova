
import { useState } from "react"
import BreakGlassAccess from "./BreakGlassAccess"

type EmergencyPatientLookupProps = {
  onBack?: () => void
}

function EmergencyPatientLookup({
  onBack,
}: EmergencyPatientLookupProps) {
  const [healthId, setHealthId] = useState("")
  const [error, setError] = useState("")
  const [showPatient, setShowPatient] = useState(false)
  const [showBreakGlass, setShowBreakGlass] = useState(false)
  const [breakGlassActive, setBreakGlassActive] = useState(false)

  const handleAccess = () => {
    setError("")

    if (!healthId.trim()) {
      setError("Please enter a Health ID")
      return
    }

    if (healthId.trim().toUpperCase() === "JEEVAN-2026-001") {
      setShowPatient(true)
    } else {
      setError("Health ID not found. Please check the ID and try again.")
    }
  }

  // ================= ACTIVATE BREAK GLASS =================
  const activateBreakGlass = () => {
    setBreakGlassActive(true)
    setShowBreakGlass(false)
  }

  // ================= BREAK GLASS PAGE =================
  if (breakGlassActive) {
    return (
      <BreakGlassAccess
        onBack={() => setBreakGlassActive(false)}
      />
    )
  }

  // ================= PATIENT EMERGENCY INFORMATION =================
  if (showPatient) {
    return (
      <div className="min-h-screen bg-slate-100 flex justify-center">

        <div className="w-full max-w-md min-h-screen bg-slate-50 shadow-xl">

          {/* ================= HEADER ================= */}
          <header className="bg-white px-5 pt-5 pb-4 border-b border-slate-100">

            <button
              type="button"
              onClick={() => {
                setShowPatient(false)
                setBreakGlassActive(false)
              }}
              className="mb-4 text-blue-600 font-medium hover:text-blue-800"
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
                  Emergency Information
                </h1>

                <p className="text-sm text-slate-500">
                  Critical information only
                </p>

              </div>

            </div>

          </header>


          {/* ================= MAIN ================= */}
          <main className="px-5 py-5 pb-10">

            {/* ================= EMERGENCY WARNING ================= */}
            <section className="rounded-2xl border border-red-200 bg-red-50 p-5">

              <div className="flex gap-3">

                <span className="text-xl">
                  ⚠️
                </span>

                <div>

                  <h2 className="font-bold text-red-700">
                    Emergency Access
                  </h2>

                  <p className="mt-1 text-sm text-red-600">
                    You are viewing limited critical health
                    information for emergency treatment.
                  </p>

                </div>

              </div>

            </section>


            {/* ================= BREAK GLASS ACTIVE ================= */}
            {breakGlassActive && (
              <section className="mt-5 rounded-2xl border border-orange-300 bg-orange-50 p-5">

                <div className="flex items-start gap-3">

                  <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center">
                    🔓
                  </div>

                  <div className="flex-1">

                    <h2 className="font-bold text-orange-800">
                      Break-Glass Access Activated
                    </h2>

                    <p className="mt-1 text-sm text-orange-700">
                      Emergency override has been activated.
                      Additional patient information is now available.
                    </p>

                  </div>

                </div>

              </section>
            )}


            {/* ================= PATIENT IDENTITY ================= */}
            <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

              <h2 className="font-bold text-slate-900">
                Patient Identity
              </h2>

              <div className="mt-4 space-y-3">

                <div className="flex justify-between">

                  <span className="text-sm text-slate-500">
                    Name
                  </span>

                  <span className="text-sm font-semibold text-slate-900">
                    Aarav Sharma
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-sm text-slate-500">
                    Health ID
                  </span>

                  <span className="text-sm font-semibold text-blue-700">
                    JEEVAN-2026-001
                  </span>

                </div>

              </div>

            </section>


            {/* ================= CRITICAL INFORMATION ================= */}
            <section className="mt-5">

              <h2 className="mb-3 font-bold text-slate-900">
                Critical Information
              </h2>

              <div className="grid grid-cols-2 gap-3">

                {/* Blood Group */}
                <div className="rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">

                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                    🩸
                  </div>

                  <p className="mt-3 text-xs text-slate-500">
                    Blood Group
                  </p>

                  <p className="mt-1 text-lg font-bold text-red-600">
                    O+
                  </p>

                </div>


                {/* Allergies */}
                <div className="rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">

                  <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                    ⚠️
                  </div>

                  <p className="mt-3 text-xs text-slate-500">
                    Allergies
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    No known allergies
                  </p>

                </div>

              </div>

            </section>


            {/* ================= MEDICATIONS ================= */}
            <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

              <h2 className="font-bold text-slate-900">
                Current Medications
              </h2>

              <div className="mt-3 rounded-xl bg-blue-50 p-4">

                <p className="text-sm text-blue-800">
                  💊 None
                </p>

              </div>

            </section>


            {/* ================= EMERGENCY CONTACT ================= */}
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
                    +91 XXXXX XXXXX
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


            {/* ================= BREAK GLASS ================= */}
            <section className="mt-5 rounded-2xl border border-orange-200 bg-orange-50 p-5">

              <div className="flex items-start gap-3">

                <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center">
                  🔓
                </div>

                <div className="flex-1">

                  <h2 className="font-bold text-orange-800">
                    Break-Glass Access
                  </h2>

                  <p className="mt-2 text-sm text-orange-700">
                    If normal consent is unavailable and immediate
                    treatment is required, you can temporarily access
                    additional medical information.
                  </p>

                </div>

              </div>


              {/* Activate Button */}
              {!breakGlassActive ? (

                <button
                  type="button"
                  onClick={() => setShowBreakGlass(true)}
                  className="mt-4 w-full rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-700 transition"
                >
                  🔓 Activate Break-Glass Access
                </button>

              ) : (

                <div className="mt-4 rounded-xl bg-green-100 p-4">

                  <p className="text-sm font-bold text-green-700">
                    ✓ Break-Glass Access Active
                  </p>

                  <p className="mt-1 text-xs text-green-600">
                    Additional medical information is now available.
                  </p>

                </div>

              )}

            </section>


            {/* ================= SECURITY NOTICE ================= */}
            <section className="mt-5 rounded-2xl bg-blue-50 border border-blue-100 p-4">

              <div className="flex gap-3">

                <span className="text-lg">
                  🔒
                </span>

                <p className="text-sm text-blue-700">
                  Emergency access is temporary and limited to
                  critical health information. Break-Glass access
                  is recorded in the audit log.
                </p>

              </div>

            </section>

          </main>


          {/* ================= BREAK GLASS CONFIRMATION ================= */}
          {showBreakGlass && (

            <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-5 z-50">

              <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  🔓
                </div>

                <h2 className="mt-4 text-lg font-bold text-slate-900">
                  Activate Break-Glass Access?
                </h2>

                <p className="mt-2 text-sm text-slate-600">
                  This will temporarily override normal consent
                  restrictions and provide access to additional
                  medical information required for emergency treatment.
                </p>


                {/* Warning */}
                <div className="mt-4 rounded-xl bg-yellow-50 border border-yellow-200 p-4">

                  <p className="text-sm text-yellow-800">
                    ⚠️ This action will be recorded in the audit log.
                  </p>

                </div>


                {/* Buttons */}
                <div className="mt-5 grid grid-cols-2 gap-3">

                  <button
                    type="button"
                    onClick={() => setShowBreakGlass(false)}
                    className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-200"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={activateBreakGlass}
                    className="rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-700"
                  >
                    Confirm Access
                  </button>

                </div>

              </div>

            </div>

          )}

        </div>
      </div>
    )
  }


  // ================= EMERGENCY LOOKUP =================
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">

      <div className="w-full max-w-md min-h-screen bg-slate-50 shadow-xl">

        {/* ================= HEADER ================= */}
        <header className="bg-white px-5 pt-5 pb-4 border-b border-slate-100">

          <button
            type="button"
            onClick={onBack}
            className="mb-4 text-blue-600 font-medium hover:text-blue-800"
          >
            ← Back
          </button>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
              🚨
            </div>

            <div>

              <h1 className="text-xl font-bold text-slate-900">
                Emergency Access
              </h1>

              <p className="text-sm text-slate-500">
                Access critical patient information
              </p>

            </div>

          </div>

        </header>


        {/* ================= MAIN ================= */}
        <main className="px-5 py-5">

          {/* Emergency Mode */}
          <section className="rounded-2xl border border-red-200 bg-red-50 p-5">

            <h2 className="font-bold text-red-700">
              🚨 Emergency Mode
            </h2>

            <p className="mt-2 text-sm text-red-600">
              Use this option when immediate access to a
              patient's critical health information is required.
            </p>

          </section>


          {/* Health ID */}
          <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

            <h2 className="font-bold text-slate-900">
              Patient Health ID
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Enter the patient's Jeevan Health ID
            </p>

            <input
              type="text"
              value={healthId}
              onChange={(e) => setHealthId(e.target.value)}
              placeholder="JEEVAN-2026-001"
              className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
            />

            {error && (
              <p className="mt-2 text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={handleAccess}
              className="mt-4 w-full rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700 transition"
            >
              Access Emergency Information
            </button>

          </section>


          {/* Security Notice */}
          <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100">

            <div className="flex gap-3">

              <span className="text-lg">
                🔒
              </span>

              <p className="text-sm text-slate-600">
                Only limited critical information is shown during
                emergency access. Access should be monitored and
                recorded for accountability.
              </p>

            </div>

          </section>

        </main>

      </div>

    </div>
  )
}

export default EmergencyPatientLookup

