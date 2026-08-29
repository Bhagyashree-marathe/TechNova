import { useState } from "react"
import DoctorDashboard from "./DoctorDashboard"

type DoctorLoginProps = {
  onBack: () => void
}

function DoctorLogin({ onBack }: DoctorLoginProps) {
  const [doctorId, setDoctorId] = useState("")
  const [password, setPassword] = useState("")
  const [showDashboard, setShowDashboard] = useState(false)

  // Show Doctor Dashboard after login
  if (showDashboard) {
    return (
      <DoctorDashboard
        onBack={() => setShowDashboard(false)}
      />
    )
  }

  const handleLogin = () => {
    if (!doctorId.trim() || !password.trim()) {
      alert("Please enter Doctor ID and Password")
      return
    }

    // Temporary prototype login
    setShowDashboard(true)
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      <div className="w-full max-w-md min-h-screen bg-white shadow-xl">

        {/* Header */}
        <header className="px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-3">

            <button
              type="button"
              onClick={onBack}
              className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600"
            >
              ←
            </button>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Doctor Login
              </h1>

              <p className="text-xs text-slate-500">
                Secure access for healthcare professionals
              </p>
            </div>

          </div>
        </header>

        {/* Main */}
        <main className="px-6 py-8">

          {/* Doctor Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">

              <svg
                viewBox="0 0 24 24"
                className="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7" />
              </svg>

            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Welcome, Doctor
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Login to securely access patient health records
            </p>
          </div>

          {/* Doctor ID */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Doctor ID / Registration Number
            </label>

            <input
              type="text"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              placeholder="Enter Doctor ID"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-7">
            <button
              type="button"
              className="text-sm font-semibold text-blue-600"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login */}
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-md transition active:scale-[0.98]"
          >
            Login as Doctor
          </button>

          {/* Security */}
          <div className="mt-7 rounded-xl bg-blue-50 border border-blue-100 p-4">
            <p className="text-sm font-semibold text-blue-700">
              🔒 Secure Access
            </p>

            <p className="text-xs text-blue-600 mt-1 leading-5">
              Patient information is accessible only to authorized
              healthcare professionals.
            </p>
          </div>

        </main>

      </div>
    </div>
  )
}

export default DoctorLogin