
import { useState } from "react"
import RegisterPage from "./RegisterPage"
import LoginPage from "./Loginpage"
import DoctorLogin from "./DoctorLogin"
import EmergencyAccess from "./EmergencyAccess"

function LandingPage() {
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showDoctorLogin, setShowDoctorLogin] = useState(false)
  const [showEmergencyAccess, setShowEmergencyAccess] = useState(false)

  // ================= REGISTER PAGE =================
  if (showRegister) {
    return <RegisterPage />
  }

  // ================= PATIENT LOGIN =================
  if (showLogin) {
    return <LoginPage />
  }

  // ================= DOCTOR LOGIN =================
  if (showDoctorLogin) {
    return (
      <DoctorLogin
        onBack={() => setShowDoctorLogin(false)}
      />
    )
  }

  // ================= EMERGENCY ACCESS =================
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
      <div className="w-full max-w-md min-h-screen bg-white shadow-xl">

        {/* ================= HEADER ================= */}
        <header className="flex items-center justify-between px-5 py-4 border-b border-slate-100">

          <div className="flex items-center gap-2">

            {/* Jeevan Logo */}
            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">

              <svg
                viewBox="0 0 48 48"
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  d="M24 40S8 31 8 19C8 12 13 8 19 8c3 0 5 2 7 5 2-3 4-5 7-5 6 0 11 4 11 11 0 12-16 21-20 21Z"
                />

                <path d="M14 23h6l2-4 3 8 3-5h6" />
              </svg>

            </div>

            <div>
              <h1 className="text-lg font-bold tracking-wide text-slate-900">
                JEEVAN
              </h1>

              <p className="text-[10px] font-bold tracking-[0.18em] text-blue-600">
                HEALTH ID
              </p>
            </div>

          </div>

          {/* Menu */}
          <button
            type="button"
            className="text-slate-700"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </header>


        {/* ================= MAIN ================= */}
        <main className="px-6 py-8">

          {/* ================= HEADING ================= */}
          <section>

            <h2 className="text-3xl font-bold leading-[1.15] text-slate-900">
              Your Health.
              <br />

              Your{" "}
              <span className="text-blue-600">
                Identity.
              </span>

              <br />

              Your{" "}
              <span className="text-blue-600">
                Control.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Secure. Private. Accessible.
              <br />
              Anytime. Anywhere.
            </p>

          </section>


          {/* ================= MEDICAL ILLUSTRATION ================= */}
          <div className="relative mt-7 h-64 overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-50 via-white to-blue-100">

            {/* Decorative dots */}
            <div className="absolute top-5 left-8 w-2 h-2 rounded-full bg-blue-300" />
            <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-blue-300" />
            <div className="absolute bottom-8 left-16 w-3 h-3 rounded-full bg-blue-200" />

            {/* Decorative plus */}
            <span className="absolute top-7 left-1/2 text-2xl font-light text-blue-300">
              +
            </span>

            <span className="absolute top-12 right-20 text-xl text-blue-300">
              +
            </span>

            {/* Connection Circle */}
            <div className="absolute left-1/2 top-8 -translate-x-1/2 w-44 h-44 rounded-full border-2 border-dashed border-blue-300" />

            {/* LOCK */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-2 border-blue-200 shadow-sm flex items-center justify-center z-10">

              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect
                  x="5"
                  y="10"
                  width="14"
                  height="10"
                  rx="2"
                />

                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>

            </div>


            {/* PEOPLE */}
            <div className="absolute left-6 top-16 w-12 h-12 rounded-full bg-white border border-blue-200 shadow-sm flex items-center justify-center">

              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="9" cy="8" r="3" />

                <circle
                  cx="17"
                  cy="10"
                  r="2.5"
                />

                <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5" />

                <path d="M15 15c3 0 5 1.5 6 4" />
              </svg>

            </div>


            {/* HEART */}
            <div className="absolute right-6 top-16 w-12 h-12 rounded-full bg-white border border-blue-200 shadow-sm flex items-center justify-center">

              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                />

                <path
                  d="M5 12h4l2-4 2 8 2-4h4"
                />
              </svg>

            </div>


            {/* MEDICAL RECORD */}
            <div className="absolute left-5 bottom-7 w-20 h-24 rounded-lg bg-white border-2 border-slate-300 shadow-md rotate-[-5deg]">

              <div className="absolute -top-3 left-6 w-8 h-5 rounded-md bg-slate-300" />

              <div className="p-3 pt-5">

                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <span className="text-blue-600 text-xs">
                    +
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="h-1.5 w-11 bg-slate-200 rounded" />
                  <div className="h-1.5 w-9 bg-slate-200 rounded" />
                  <div className="h-1.5 w-12 bg-slate-200 rounded" />
                </div>

                <div className="mt-2 space-y-1">

                  <div className="flex items-center gap-1">
                    <span className="text-[9px] text-blue-600">
                      ✓
                    </span>

                    <div className="h-1 w-7 bg-slate-200 rounded" />
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-[9px] text-blue-600">
                      ✓
                    </span>

                    <div className="h-1 w-8 bg-slate-200 rounded" />
                  </div>

                </div>

              </div>

            </div>


            {/* STETHOSCOPE */}
            <div className="absolute right-3 bottom-4 w-24 h-24">

              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-slate-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
              >

                <path
                  d="M25 10v25c0 15 10 25 25 25s25-10 25-25V10"
                />

                <path d="M25 10h-5M75 10h5" />

                <circle
                  cx="50"
                  cy="72"
                  r="12"
                />

                <path
                  d="M50 84v8c0 4 4 6 8 6"
                />

                <circle
                  cx="60"
                  cy="98"
                  r="3"
                />

              </svg>

            </div>


            {/* PHONE */}
            <div className="absolute left-1/2 bottom-[-12px] -translate-x-1/2 w-52 h-28 rounded-[24px] border-4 border-slate-700 bg-white shadow-xl rotate-[-2deg]">

              <div className="absolute inset-2 rounded-[17px] bg-blue-50 overflow-hidden">

                <div className="absolute top-5 left-5 w-9 h-9 rounded-full bg-blue-200 flex items-center justify-center">

                  <span className="text-blue-600 text-sm">
                    ♥
                  </span>

                </div>

                <div className="absolute top-6 left-16 space-y-1">

                  <div className="h-2 w-20 bg-blue-200 rounded" />
                  <div className="h-1.5 w-14 bg-blue-100 rounded" />

                </div>

                <div className="absolute left-5 right-5 bottom-4 h-9 rounded-lg bg-white border border-blue-100">

                  <div className="flex items-center h-full px-3 gap-2">

                    <span className="text-blue-600 text-xs">
                      ♥
                    </span>

                    <div className="h-1.5 w-20 bg-blue-100 rounded" />

                  </div>

                </div>

              </div>

              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-slate-500" />

            </div>


            {/* MAIN SHIELD */}
            <div className="absolute left-1/2 top-[92px] -translate-x-1/2 z-20">

              <svg
                viewBox="0 0 120 140"
                className="w-24 h-28 drop-shadow-lg"
              >

                <defs>

                  <linearGradient
                    id="shieldGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >

                    <stop
                      offset="0%"
                      stopColor="#2563eb"
                    />

                    <stop
                      offset="100%"
                      stopColor="#1d4ed8"
                    />

                  </linearGradient>

                </defs>

                <path
                  d="M60 5 L108 25 V65 C108 100 87 123 60 135 C33 123 12 100 12 65 V25 Z"
                  fill="url(#shieldGradient)"
                  stroke="#93c5fd"
                  strokeWidth="3"
                />

                <rect
                  x="52"
                  y="35"
                  width="16"
                  height="55"
                  rx="3"
                  fill="white"
                />

                <rect
                  x="32"
                  y="55"
                  width="56"
                  height="16"
                  rx="3"
                  fill="white"
                />

              </svg>

            </div>

          </div>


          {/* ================= CREATE HEALTH ID ================= */}
          <button
            type="button"
            onClick={() => setShowRegister(true)}
            className="w-full mt-7 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-md transition active:scale-[0.98]"
          >
            Create Health ID
          </button>


          {/* ================= DOCTOR ================= */}
          <button
            type="button"
            onClick={() => setShowDoctorLogin(true)}
            className="w-full mt-3 border-2 border-blue-600 text-blue-600 font-semibold py-4 rounded-xl hover:bg-blue-50 transition active:scale-[0.98]"
          >
            I'm a Doctor
          </button>


          {/* ================= LOGIN ================= */}
          <div className="text-center mt-6">

            <p className="text-sm text-slate-500">
              Already have a Health ID?
            </p>

            <button
              type="button"
              onClick={() => setShowLogin(true)}
              className="mt-1 text-sm font-semibold text-blue-600"
            >
              Login
            </button>

          </div>


          {/* ================= EMERGENCY ================= */}
          <button
            type="button"
            onClick={() => setShowEmergencyAccess(true)}
            className="w-full mt-6 flex items-center justify-between rounded-xl bg-red-50 border border-red-200 px-4 py-3.5 text-red-600"
          >

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">

                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >

                  <path d="M12 3v8" />
                  <path d="M7 6a7 7 0 1 0 10 0" />
                  <path d="M9 20h6" />
                  <path d="M10 17h4" />

                </svg>

              </div>

              <div className="text-left">

                <p className="font-semibold">
                  Emergency Access
                </p>

                <p className="text-xs text-red-500">
                  Critical information when needed
                </p>

              </div>

            </div>

            <span className="text-xl">
              →
            </span>

          </button>


          {/* ================= SECURITY ================= */}
          <div className="flex justify-center gap-5 mt-7 pb-5 text-xs text-slate-400">

            <span>
              🔒 Secure
            </span>

            <span>
              🛡 Private
            </span>

            <span>
              ✓ Patient Controlled
            </span>

          </div>

        </main>

      </div>

    </div>
  )
}

export default LandingPage

