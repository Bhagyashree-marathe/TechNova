import { useState } from "react"
import { loginPatient } from "../api/auth"
import RegisterPage from "./RegisterPage"
import PatientDashboard from "./PatientDashboard"

function LoginPage() {
  const [showRegister, setShowRegister] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const handleLogin = async () => {
  setLoginError("")

  if (!identifier.trim() || !password.trim()) {
    setLoginError("Please enter your Health ID/mobile number and password")
    return
  }

  try {
    setIsLoading(true)

    const data = await loginPatient(identifier, password)

    localStorage.setItem("token", data.token)
    localStorage.setItem("patient", JSON.stringify(data.patient))

    setShowDashboard(true)
  } catch (error) {
    setLoginError(
      error instanceof Error ? error.message : "Login failed"
    )
  } finally {
    setIsLoading(false)
  }
}

  // Open Register Page
  if (showRegister) {
    return <RegisterPage />
  }

  // Open Patient Dashboard
  if (showDashboard) {
    return <PatientDashboard />
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">

      {/* Mobile App Container */}
      <div className="w-full max-w-md min-h-screen bg-white shadow-xl">

        {/* ================= HEADER ================= */}
        <header className="flex items-center gap-4 px-5 py-5 border-b border-slate-100">

          <button
            type="button"
            onClick={() => window.history.back()}
            className="text-2xl text-slate-700"
          >
            ←
          </button>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              Welcome Back
            </h1>

            <p className="text-xs text-slate-500">
              Login to your Jeevan Health ID
            </p>
          </div>

        </header>


        {/* ================= MAIN CONTENT ================= */}
        <main className="px-6 py-8">

          {/* Login Icon */}
          <div className="flex justify-center mb-6">

            <div className="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center">

              <svg
                viewBox="0 0 24 24"
                className="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="8" r="4" />

                <path d="M4 21c0-4.2 3.5-7 8-7s8 2.8 8 7" />
              </svg>

            </div>

          </div>


          {/* Title */}
          <div className="text-center mb-8">

            <h2 className="text-2xl font-bold text-slate-900">
              Login to Jeevan
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Access your secure digital health identity
            </p>

          </div>


          {/* ================= LOGIN FORM ================= */}
          <form className="space-y-5">

            {/* Health ID / Mobile */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Health ID or Mobile Number
              </label>

              <input
                type="text"
                placeholder="Enter Health ID or mobile number"
                value={identifier}onChange={(e) => setIdentifier(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>


            {/* Password */}
            <div>

              <div className="flex items-center justify-between mb-2">

                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-semibold text-blue-600"
                >
                  Forgot Password?
                </button>

              </div>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>


            {/* Remember Me */}
            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
              />

              <span className="text-sm text-slate-600">
                Keep me signed in
              </span>

            </label>
            {loginError && (
            <p className="text-sm text-red-600">
            {loginError}
             </p>
            )}



            {/* ================= LOGIN BUTTON ================= */}
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-md transition active:scale-[0.98]"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>

          </form>


          {/* ================= OR ================= */}
          <div className="flex items-center gap-4 my-7">

            <div className="flex-1 h-px bg-slate-200" />

            <span className="text-xs text-slate-400">
              OR
            </span>

            <div className="flex-1 h-px bg-slate-200" />

          </div>


          {/* ================= OTP LOGIN ================= */}
          <button
            type="button"
            className="w-full border-2 border-blue-600 text-blue-600 font-semibold py-3.5 rounded-xl hover:bg-blue-50 transition"
          >
            Login with OTP
          </button>


          {/* ================= REGISTER ================= */}
          <div className="text-center mt-7">

            <p className="text-sm text-slate-500">
              Don't have a Health ID?
            </p>

            <button
              type="button"
              onClick={() => setShowRegister(true)}
              className="mt-1 text-sm font-semibold text-blue-600"
            >
              Create Health ID →
            </button>

          </div>


          {/* ================= SECURITY INFORMATION ================= */}
          <div className="mt-8 rounded-xl bg-blue-50 border border-blue-100 p-4">

            <div className="flex items-start gap-3">

              <div className="text-blue-600">
                🔒
              </div>

              <div>

                <p className="text-sm font-semibold text-slate-800">
                  Your data is secure
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Jeevan protects your health information using
                  secure authentication and privacy controls.
                </p>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  )
}

export default LoginPage